import './Navigation.css';
import React from "react";
import { Component } from 'react';

class Navigation extends Component {
    render () {
        const { onRouteChange } = this.props;

        return (
            <nav style={{display: 'flex', justifyContent: 'flex-start'}}>
                <p onClick={() => onRouteChange('home')} className="nav-link">Home</p>
                <p onClick={() => onRouteChange('refining')} className="nav-link">Refining</p>
            </nav>
        );
    }
}

export default Navigation;