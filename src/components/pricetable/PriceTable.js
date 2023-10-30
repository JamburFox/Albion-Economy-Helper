import './PriceTable.css';
import React from "react";
import { Component } from 'react';
import PriceTableRow from './PriceTableRow';


class PriceTable extends Component {
    render () {
        const { marketName, listingType, prices } = this.props;

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
                    <PriceTableRow city={"Martlock"} prices={prices?.filter(item => item.city === "Martlock")[0]} listingType={listingType} />
                    <PriceTableRow city={"Bridgewatch"} prices={prices?.filter(item => item.city === "Bridgewatch")[0]} listingType={listingType} />
                    <PriceTableRow city={"Lymhurst"} prices={prices?.filter(item => item.city === "Lymhurst")[0]} listingType={listingType} />
                    <PriceTableRow city={"Fort Sterling"} prices={prices?.filter(item => item.city === "Fort Sterling")[0]} listingType={listingType} />
                    <PriceTableRow city={"Thetford"} prices={prices?.filter(item => item.city === "Thetford")[0]} listingType={listingType} />
                    <PriceTableRow city={"Caerleon"} prices={prices?.filter(item => item.city === "Caerleon")[0]} listingType={listingType} />
                </tbody>
                </table>
        </>);
    }
}

export default PriceTable;