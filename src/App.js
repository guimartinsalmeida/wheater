import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de Mexico,mx',
  'Madrid,es',
  'Lima,pe',
]

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectionLocation ${city}`)
  }
  render(){
  return (
    <div className="App">
    <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
    </div>

  );
}
}

export default App