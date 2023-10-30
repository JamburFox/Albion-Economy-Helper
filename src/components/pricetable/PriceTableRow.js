import './PriceTable.css';
import React from "react";
import { Component } from 'react';

class PriceTableRow extends Component {
    render(){
        const { city, highlightedCity, prices, listingType } = this.props;
        let price = 0;
        if (prices){
            switch(listingType){
                case "sell_price_min":
                    price = prices.sell_price_min;
                    break;

                case "sell_price_max":
                    price = prices.sell_price_max;
                    break;

                case "buy_price_min":
                    price = prices.buy_price_min;
                    break;

                case "buy_price_max":
                    price = prices.buy_price_max;
                    break;
            }
        }

        return (<>
            <tr className={city === highlightedCity ? 'highlighted-row' : ''}>
                <td>{city}</td>
                <td>{price}</td>
            </tr>
        </>);
    }
}

export default PriceTableRow;