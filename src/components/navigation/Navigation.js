import './Navigation.css';
import React from "react";
import { Component } from 'react';
//import logo from './logo.svg';
import SilverLogo from '../../SilverLogo.png';

class Navigation extends Component {
    render () {
        const { onRouteChange } = this.props;

        return (
            <nav style={{display: 'flex', justifyContent: 'flex-start'}} className='nav-container'>
                <img onClick={() => onRouteChange('home')} className="nav-link logo" src={SilverLogo} alt="Logo" />
                <p onClick={() => onRouteChange('home')} className="nav-link">Home</p>
                <p onClick={() => onRouteChange('refining')} className="nav-link">Refining</p>
            </nav>
        );
    }
}

export default Navigation;