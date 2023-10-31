import './CitySelect.css';
import React from "react";
import { Component } from 'react';

class CitySelect extends Component {
    render () {
        const { label, onCityChange } = this.props;

        return (
            <div className='selection'>
                <label>{label}</label>
                <select onChange={onCityChange}>
                    <option key="Lymhurst" value="Lymhurst">Lymhurst</option>
                    <option key="Martlock" value="Martlock">Martlock</option>
                    <option key="Bridgewatch" value="Bridgewatch">Bridgewatch</option>
                    <option key="Fort Sterling" value="Fort Sterling">Fort Sterling</option>
                    <option key="Thetford" value="Thetford">Thetford</option>
                    <option key="Caerleon" value="Caerleon">Caerleon</option>
                </select>
            </div>
        );
    }
}

export default CitySelect;