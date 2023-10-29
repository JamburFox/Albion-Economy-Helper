import './ResourceDisplay.css';
import React from "react";
import { Component } from 'react';
import PriceTable from '../pricetable/PriceTable';

class ResourceDisplay extends Component {
    render () {
        const { resource, count, listingType, onPrices } = this.props;

        return (
            <div className="display-container-inline">
                <div className="display-container">
                    <label className="resource-name">{resource.name} <b>x{count}</b></label>
                    <img src={resource.imageUrl} alt={resource.name} className="resource-image"/>
                    <PriceTable marketName={resource.marketName} listingType={listingType} count={count} onPrices={onPrices} />
                </div>
            </div>
        );
    }
}

export default ResourceDisplay;