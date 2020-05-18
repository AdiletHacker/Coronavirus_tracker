import React, { useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MainInfo from './components/MainInfo';
import NavBar from './components/NavBar';
import { Route, Switch } from "react-router-dom";
import AllCountriesInfo from './components/AllCountriesInfo';
import { getGlobalData, getCountriesData } from './store/virus_data';
import { connect } from "react-redux";

const App = (props) => {
  useEffect(() => {
    props.getGlobalData();
    props.getCountriesData();
  }, []);

  return <div className="App">
    <NavBar />
    <Switch>
      <Route path="/" exact component={MainInfo} />
      <Route path="/countries" component={AllCountriesInfo} />
    </Switch>
  </div>
}

export default connect(null, { getGlobalData, getCountriesData })(App);

