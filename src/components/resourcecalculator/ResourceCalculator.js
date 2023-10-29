import './ResourceCalculator.css';
import React from "react";
import { Component } from 'react';
import ResourceDisplay from '../resourcedisplay/ResourceDisplay';

import { plankResources } from '../../albionresources/Planks';
import { resourcesDict } from '../../albionresources/ResourcesDB';

class ResourceCalculator extends Component {

    
    getRequiredResources(level, requiredFood, requiredResources, resources){
        for (let i = 0; i < resources.length; i++){
            let resource = resourcesDict.get(resources[i].name);
            if (resource.type === "raw"){
                console.log(resources[i]);
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
        console.log(item);
        let requiredResources = [];
        let requiredFood = this.getRequiredResources(1, item.craft.food, requiredResources, item.craft.resources);

        return { requiredResources, requiredFood};
    }

    getPrices = (prices) => {
        //console.log(prices);
    }
    
    render () {
        const { count, returnRate, foodCost, tier } = this.props;

        let resource = plankResources[0];
        let displayedResources = [];
        let returnBonus = 0.367;//0.367;
        for (let i = 0; i < plankResources.length; i++){
            if (tier === plankResources[i].tier){
                resource = plankResources[i];
            }
        }
        let { requiredResources, requiredFood } = this.getCraftCost(resource);
        let requiredSilver = (requiredFood*count/100)*foodCost;
        let totalWeight = 0;
        for (let i = 0; i < requiredResources.length; i++){
            let wood = resourcesDict.get(requiredResources[i].name);
            if (wood){
                totalWeight += wood.weight * requiredResources[i].count*count;
                let totalCount = Math.ceil(requiredResources[i].count*count);//*(1-returnBonus)
                displayedResources.push(
                    <ResourceDisplay resource={wood} count={totalCount} listingType={"sell_price_min"} onPrices={this.getPrices} />
                );
            }
        }

        return (
            <div>
                <h1>Resources</h1>
                {displayedResources}
                <p>Refine Cost: <b>{(requiredSilver/1000).toFixed(1)} K</b></p>
                <p>Total Weight: <b>{parseInt(totalWeight)} Kg</b></p>
                <h1>Product</h1>
                <ResourceDisplay resource={resource} count={count} listingType={"sell_price_min"/*buy_price_max*/} />
            </div>
        );
    }
}

export default ResourceCalculator;