import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/Header/Header';
import Bins from './components/Bins/Bins'
import Inventory from './components/Inventory/Inventory';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Bin from './components/Bin/Bin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/bins/:id" component={Bins}/>
          <Route path="/bin/:id" component={Bin}/>
          <Route path="/bin/update_bin/:shelf_id/:bin_id" component={Bin}/>
          <Route path="/create/:id" component={Create}/>
          <Route path="/inventory" component={Inventory} />    
        </Switch>
      </div>
    );
  }
}

export default App;
