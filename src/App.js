import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import {Grid, Col, Row} from 'react-flexbox-grid'
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended'
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

constructor(){
  super()
  this.state={city:'Nueva Ciudad'}
}

  handleSelectedLocation = city => {
    this.setState({city})
    console.log(`handleSelectionLocation ${city}`)
  }
  render(){
    const {city} = this.state
  return (
    <Grid>
      <Row>
        <AppBar position ='sticky'>
          <Toolbar>
            <Typography variante='title' color='inherit'>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
        </Col>
        <Col xs = {12} md={6}>
          <Paper zDepth={4}>
          <div className='details'>
<ForecastExtended city={city}></ForecastExtended>
          </div>

          </Paper>
          
        </Col>
      </Row>
    
    </Grid>

  );
}
}

export default App