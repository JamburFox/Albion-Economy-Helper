import './CountSelector.css';
import React from "react";
import { Component } from 'react';

class CountSelector extends Component {
    render () {
        const { label , onChange, defaultValue, min, max} = this.props;

        return (
            <div className='panel'>
                <label className="label">{label}</label>
                <input onChange={onChange} type="number" defaultValue={defaultValue} {...(min !== undefined ? {min: min} : {})} {...(max !== undefined ? {max: max} : {})} />
            </div>
        );
    }
}

export default CountSelector;