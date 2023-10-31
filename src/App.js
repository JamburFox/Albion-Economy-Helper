import './App.css';
import { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import ResourceSelection from './components/resourceselection/ResourceSelection';
import CountSelector from './components/countselector/CountSelector';
import CitySelect from './components/cityselect/CitySelect';
import ResourceDisplay from './components/resourcedisplay/ResourceDisplay';
import ResourceCalculator from './components/resourcecalculator/ResourceCalculator';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: "refining",
      refineType: "plank",
      itemTier: 2,
      itemCount: 1,
      returnRate : 36.7,
      foodCost : 1000
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  onCountChange = (event) => {
    this.setState({itemCount: event.target.value});
  }

  onReturnRateChange = (event) => {
    this.setState({returnRate: event.target.value});
  }

  onFoodChange = (event) => {
    this.setState({foodCost: event.target.value});
  }

  onRefineTypeChange = (event) => {
    this.setState({refineType: event.target.value});
  }

  onTierChange = (event) => {
    this.setState({itemTier: parseFloat(event.target.value)});
  }

  render (){
    const { route, itemTier, itemCount, returnRate, foodCost } = this.state;
    let basePage = (<></>);
    
    switch(route){
      case "home":
        basePage = (<>
          <div className='panel'>
            <p>A simple Refining Helper Tool made by Jambur</p>
            <p>This project uses the <a href='https://www.albion-online-data.com'>Albion Data Project API</a></p>
          </div>
        </>);
      break;

      case "refining":
        basePage = (<>
          <div className='panel'>
            <ResourceSelection onRefineTypeChange={this.onRefineTypeChange} onTierChange={this.onTierChange} />
            <CountSelector label="Number of Resources" onChange={this.onCountChange} defaultValue={itemCount} min={0} />
            <CountSelector label="Refining Return Rate" onChange={this.onReturnRateChange} defaultValue={returnRate} min={0} max={100} />
            <CountSelector label="Cost per 100 food" onChange={this.onFoodChange} defaultValue={foodCost} min={0} />
          </div>
          <ResourceCalculator count={itemCount} returnRate={returnRate} foodCost={foodCost} tier={itemTier}/>
        </>);
      break;

      case "market":
        basePage = (<>
          <h1>Market</h1>
        </>);
      break;
    }

    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} />
        <div className='page' style={{ marginTop: '80px' }}>
          {basePage}
        </div>
      </div>
    );
  }
}

export default App;
