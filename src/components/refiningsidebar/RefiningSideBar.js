import './RefiningSideBar.css';
import React from "react";
import { Component } from 'react';
import CitySelect from '../cityselect/CitySelect';

class RefiningSideBar extends Component {
    constructor(){
        super();
        this.state = {
            isOpen: false,
            buyCity: "Lymhurst",
            sellCity: "Lymhurst"
        }
    }

    toggleSideBar = () =>{
        this.setState({isOpen: !this.state.isOpen});
    }

    onBuyCityChange = (event) => {
        this.setState({buyCity: event.target.value});
    }

    onSellCityChange = (event) => {
        this.setState({sellCity: event.target.value});
    }

    render () {
        const { isOpen } = this.state;
        const { weight, refineCost, cost, revenue, profit } = this.props;

        let totalCost = 0;
        let totalRevenue = 0;
        let totalProfit = 0;

        return (
        <>
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className='panel'>
                    <h1>Stats</h1>
                    <p>Refine Cost: <b>{(refineCost/1000).toFixed(1)} K</b></p>
                    <p>Total Weight: <b>{parseInt(weight)} Kg</b></p>
                </div>
                <div className='panel'>
                    <h1>Profit</h1>
                    <p>Total Buy Cost: <b>{(cost/1000).toFixed(1)} K</b></p>
                    <p>Total Sell Price: <b>{(revenue/1000).toFixed(1)} K</b></p>
                    <p>Total Profit: <b>{(profit / 1000).toFixed(1)} K</b></p>
                </div>
                <button onClick={this.toggleSideBar} className={`expand-button ${isOpen ? "open" : ""}`}>
                    <h1>{">"}</h1>
                </button>
            </div>
        </>
        );

    }
}

export default RefiningSideBar;