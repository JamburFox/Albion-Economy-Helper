import './PriceTable.css';
import React from "react";
import { Component } from 'react';
import PriceTableRow from './PriceTableRow';


class PriceTable extends Component {
    constructor(){
        super();
        this.state = {
            prices: []
        }
    }


    getPrices = async (itemName) => {
        try {
            console.log(`Fetching Prices for ${itemName}`);
            const response = await fetch(`https://east.albion-online-data.com/api/v2/stats/prices/${itemName}`, {
                method: 'get'
            });

            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();

            let prices = [];
            for(let i = 0; i < result.length; i++){
                let city = result[i].city;
                const cities = ["Martlock", "Bridgewatch", "Lymhurst", "Fort Sterling", "Thetford", "Caerleon"];
                if (cities.includes(city)){
                    prices.push(result[i]);
                }
            }
            this.setState({prices: prices});
            return prices;
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    componentDidMount(){
        const { marketName, listing, count, onPrices } = this.props;
        this.getPrices(marketName)
        .then(result => {
            if (onPrices){
                onPrices(result);
            }
        });
    }

    componentDidUpdate(prevProps, prevState){
        const { marketName, listing, count, onPrices } = this.props;

        if (prevProps.marketName !== marketName) {
            this.getPrices(marketName)
            .then(result => {
                if (onPrices){
                    onPrices(result);
                }
            });
        }
        console.log(this.state.highlightedCity);
    }

    render () {
        const { marketName, listingType, count } = this.props;

        let label = "Price";
        switch(listingType){
            case "sell_price_min"://price you buy from the market (lowest listed price)
                label = "Price";
                break;

            case "sell_price_max"://price you buy from the market
                label = "Buy Max";
                break;

            case "buy_price_min"://price you sell to the market
                label = "Sell Min";
                break;

            case "buy_price_max"://price you sell to the market
                label = "Sell Max";
                break;
        }

        return (<>
            <table className='price-table'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>{label}</th>
                    </tr>
                </thead>
                <tbody>
                    <PriceTableRow city={"Martlock"} prices={this.state.prices.filter(item => item.city === "Martlock")[0]} count={count} listingType={listingType} />
                    <PriceTableRow city={"Bridgewatch"} prices={this.state.prices.filter(item => item.city === "Bridgewatch")[0]} count={count} listingType={listingType} />
                    <PriceTableRow city={"Lymhurst"} prices={this.state.prices.filter(item => item.city === "Lymhurst")[0]} count={count} listingType={listingType} />
                    <PriceTableRow city={"Fort Sterling"} prices={this.state.prices.filter(item => item.city === "Fort Sterling")[0]} count={count} listingType={listingType} />
                    <PriceTableRow city={"Thetford"} prices={this.state.prices.filter(item => item.city === "Thetford")[0]} count={count} listingType={listingType} />
                    <PriceTableRow city={"Caerleon"} prices={this.state.prices.filter(item => item.city === "Caerleon")[0]} count={count} listingType={listingType} />
                </tbody>
                </table>
        </>);
    }
}

export default PriceTable;