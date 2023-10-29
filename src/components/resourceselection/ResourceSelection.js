import './ResourceSelection.css';
import React from "react";
import { Component } from 'react';

class ResourceSelection extends Component {
    render () {
        const { onRefineTypeChange, onTierChange } = this.props;

        const tiers = [];
        for (let i = 2; i <= 8; i++){
            tiers.push(
                <option key={`t${i}`} value={`${i}`}>Tier {i}</option>
            );
            if (i >= 4){
                tiers.push(
                    <option key={`t${i}.1`} value={`${i}.1`}>Tier {i}.1</option>
                );
                tiers.push(
                    <option key={`t${i}.2`} value={`${i}.2`}>Tier {i}.2</option>
                );
                tiers.push(
                    <option key={`t${i}.3`} value={`${i}.3`}>Tier {i}.3</option>
                );
                tiers.push(
                    <option key={`t${i}.4`} value={`${i}.4`}>Tier {i}.4</option>
                );
            }
        }

        return (
            <div className='panel'>
                <label>Resource</label>
                <select onChange={onRefineTypeChange}>
                    <option key="plank" value="plank">Plank</option>
                    <option key="brick" value="brick">Brick</option>
                    <option key="leather" value="leather">Leather</option>
                    <option key="metal" value="metal">Metal</option>
                    <option key="cloth" value="cloth">Cloth</option>
                </select>
                <label>Tier</label>
                <select onChange={onTierChange}>
                    {tiers}
                </select>
            </div>
        );
    }
}

export default ResourceSelection;