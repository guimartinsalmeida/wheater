import React, { Component } from 'react';
import{connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import {Grid, Col, Row} from 'react-flexbox-grid'
import PropTypes from 'prop-types'
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended'
import {setCity} from './actions/index'
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
  this.state={city: null}
}

  handleSelectedLocation = city => {
    this.setState({city})

  this.props.setCity(city)

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
          <Paper zdepth={4}>
          <div className='details'>
            { city &&
            <ForecastExtended city={city}></ForecastExtended>
            }
            </div>
          </Paper>
        </Col>
      </Row>
    </Grid>

  );
}
}

App.propTypes = {
  setCity:PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setCity(value))
})


export default connect(null, mapDispatchToProps) (App) 


