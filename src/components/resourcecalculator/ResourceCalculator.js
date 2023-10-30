import './ResourceCalculator.css';
import React from "react";
import { Component } from 'react';
import ResourceDisplay from '../resourcedisplay/ResourceDisplay';
import CitySelect from '../cityselect/CitySelect';
import AlbionItemData from '../../AlbionItemData';

import { plankResources } from '../../albionresources/Planks';
import { resourcesDict } from '../../albionresources/ResourcesDB';

class ResourceCalculator extends Component {
    constructor(){
        super();
        this.state = {
            prices: [],
            displayedProductInfo: null,
            displayedResourcesInfo: [],
            refineCost: 0,
            totalWeight: 0,
            buyCity: "Lymhurst",
            sellCity: "Lymhurst"
        }
      }

    getRequiredResources(level, requiredFood, requiredResources, resources){
        for (let i = 0; i < resources.length; i++){
            let resource = resourcesDict.get(resources[i].name);
            if (resource.type === "raw"){
                //requiredResources.push(resources[i]);
                requiredResources.push({name: resources[i].name, count: resources[i].count * Math.pow(1-(this.props.returnRate/100), level)});
            }else if (resource.type === "refined"){
                requiredFood += resource.craft.food;
                requiredFood = this.getRequiredResources(level+1, requiredFood, requiredResources, resource.craft.resources);
            }
        }

        return requiredFood;
    }

    getCraftCost(item){
        let requiredResources = [];
        let requiredFood = this.getRequiredResources(1, item.craft.food, requiredResources, item.craft.resources);

        return { requiredResources, requiredFood};
    }

    getTargetResource(){
        const { count, returnRate, foodCost, tier } = this.props;

        let resource = plankResources[0];
        for (let i = 0; i < plankResources.length; i++){
            if (tier === plankResources[i].tier){
                resource = plankResources[i];
            }
        }

        console.log("getTargetResource() Called!");
        return resource;
    }

    updateResources = () => {
        const { count, returnRate, foodCost, tier } = this.props;
        const albionItemData = new AlbionItemData();

        let resource = this.getTargetResource();
        let { requiredResources, requiredFood } = this.getCraftCost(resource);
        let displayedResourcesInfo = [];
        let requiredSilver = (requiredFood*count/100)*foodCost;
        let totalWeight = 0;
        for (let i = 0; i < requiredResources.length; i++){
            let wood = resourcesDict.get(requiredResources[i].name);
            if (wood){
                totalWeight += wood.weight * requiredResources[i].count*count;
                let totalCount = Math.ceil(requiredResources[i].count*count);//*(1-returnBonus)
                let filteredPrices = albionItemData.filterItemPrices(wood.marketName, this.state.prices);

                displayedResourcesInfo.push(
                    {resource: wood, count: totalCount, prices:filteredPrices }
                );
            }
        }

        let filteredPrices = albionItemData.filterItemPrices(resource.marketName, this.state.prices);
        this.setState({
            displayedProductInfo: {resource: resource, count: count, prices:filteredPrices },
            displayedResourcesInfo: displayedResourcesInfo,
            refineCost: requiredSilver,
            totalWeight: totalWeight});
        console.log("updateResources() Called!");

        return requiredResources;
    }

    fullUpdate = async () => {
        const { count, returnRate, foodCost, tier } = this.props;
        const albionItemData = new AlbionItemData();

        let resource = this.getTargetResource();
        let { requiredResources, requiredFood } = this.getCraftCost(resource);

        //get prices
        const requiredResourcesMrktNames = requiredResources.map(obj => resourcesDict.get(obj.name).marketName);
        requiredResourcesMrktNames.push(resource.marketName);
        let prices = [];
        prices = await albionItemData.getAllPrices(requiredResourcesMrktNames);

        let displayedResourcesInfo = [];
        let requiredSilver = (requiredFood*count/100)*foodCost;
        let totalWeight = 0;
        for (let i = 0; i < requiredResources.length; i++){
            let wood = resourcesDict.get(requiredResources[i].name);
            if (wood){
                totalWeight += wood.weight * requiredResources[i].count*count;
                let totalCount = Math.ceil(requiredResources[i].count*count);//*(1-returnBonus)
                let filteredPrices = albionItemData.filterItemPrices(wood.marketName, prices);

                displayedResourcesInfo.push(
                    {resource: wood, count: totalCount, prices:filteredPrices }
                );
            }
        }

        let filteredPrices = albionItemData.filterItemPrices(resource.marketName, prices);
        this.setState({
            prices: prices,
            displayedProductInfo: {resource: resource, count: count, prices:filteredPrices },
            displayedResourcesInfo: displayedResourcesInfo,
            refineCost: requiredSilver,
            totalWeight: totalWeight});
        console.log("fullUpdate() Called!");
    }

    getPrices = async (resource, requiredResources) => {
        const albionItemData = new AlbionItemData();
        
        const requiredResourcesMrktNames = requiredResources.map(obj => resourcesDict.get(obj.name).marketName);
        requiredResourcesMrktNames.push(resource.marketName);
        let prices = [];
        prices = await albionItemData.getAllPrices(requiredResourcesMrktNames);
        this.setState({prices: prices}, this.onPriceUpdate);
    }

    onBuyCityChange = (event) => {
        this.setState({buyCity: event.target.value});
    }

    onSellCityChange = (event) => {
        this.setState({sellCity: event.target.value});
    }
    
    componentDidMount (){
        const { count, returnRate, foodCost, tier } = this.props;

        this.fullUpdate();
    }
    
    componentDidUpdate (prevProps, prevState) {
        const { count, returnRate, foodCost, tier } = this.props;

        if (prevProps.tier !== tier){
            this.fullUpdate();
        }else if (prevProps !== this.props){
            this.updateResources();
        }

    }
    
    render () {
        const { count, returnRate, foodCost, tier } = this.props;
        const { displayedProductInfo, displayedResourcesInfo, buyCity, sellCity } = this.state;
        let lymTotalCost = 0;
        let lymTotalRevenue = 0;
        let lymTotalProfit = 0;
        let resource = this.getTargetResource();
        console.log(resource.marketName);

        if (displayedProductInfo && displayedResourcesInfo){
            console.log("calculating total prices");
            for (let i = 0; i < displayedResourcesInfo.length; i++){
                const prices = displayedResourcesInfo[i].prices;
                for (let p = 0; p < prices.length; p++){
                    if(prices[p].city === buyCity){
                        lymTotalCost += prices[p].sell_price_min * displayedResourcesInfo[i].count;
                    }
                }
            }

            const prices = displayedProductInfo.prices;
            for (let p = 0; p < prices.length; p++){
                if(prices[p].city === sellCity){
                    lymTotalRevenue += prices[p].sell_price_min * displayedProductInfo.count;
                }
            }
            console.log("cost:", lymTotalCost, "sold: ", lymTotalRevenue);
            lymTotalProfit = (lymTotalRevenue - lymTotalCost);
        }

        let displayedResources = [];
        let displayedProduct = null;
        for(let i = 0; i < displayedResourcesInfo.length; i++){
            displayedResources.push(
                <ResourceDisplay resource={displayedResourcesInfo[i].resource} count={displayedResourcesInfo[i].count} listingType={"sell_price_min"} prices={displayedResourcesInfo[i].prices} />
            );
        }
        if (displayedProductInfo){
            displayedProduct = <ResourceDisplay resource={displayedProductInfo.resource} count={displayedProductInfo.count} listingType={"sell_price_min"} prices={displayedProductInfo.prices} />
        }

        return (
            <div>
                <h1>Resources</h1>
                {displayedResources}
                <p>Refine Cost: <b>{(this.state.refineCost/1000).toFixed(1)} K</b></p>
                <p>Total Weight: <b>{parseInt(this.state.totalWeight)} Kg</b></p>
                <h1>Product</h1>
                {displayedProduct}
                <CitySelect label={"Resources Buy City"} onCityChange={this.onBuyCityChange} />
                <CitySelect label={"Product Sell City"} onCityChange={this.onSellCityChange} />
                <p>Total Buy Cost: <b>{(lymTotalCost/1000).toFixed(1)} K</b></p>
                <p>Total Sell Price: <b>{(lymTotalRevenue/1000).toFixed(1)} K</b></p>
                <p>Total Profit: <b>{(lymTotalProfit / 1000).toFixed(1)} K</b></p>
            </div>
        );
    }
}

export default ResourceCalculator;