import './CitySelect.css';
import React from "react";
import { Component } from 'react';

class CitySelect extends Component {
    render () {
        const { label, onCityChange } = this.props;

        return (
            <div className='panel'>
                <label>{label}</label>
                <select onChange={onCityChange}>
                    <option key="lymhurst" value="lymhurst">Lymhurst</option>
                    <option key="martlock" value="martlock">Martlock</option>
                    <option key="bridgewatch" value="bridgewatch">Bridgewatch</option>
                    <option key="fort_sterling" value="fort_sterling">Fort Sterling</option>
                    <option key="thetford" value="thetford">Thetford</option>
                    <option key="caerleon" value="caerleon">Caerleon</option>
                </select>
            </div>
        );
    }
}

export default CitySelect;