import React from 'react';
import ShoppingPage from './Components/ShoppingPage';
import PortalNavigation from './Components/PortalNavigation';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';

import { appStore } from './ApplicationStore/LoginStore'

import { Provider } from 'react-redux';

import { BrowserRouter as Router,
Switch,
Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Provider store={appStore}>
      <div className="App">
        <PortalNavigation />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path='/shop' component={ShoppingPage}></Route>
          <Route exact path='/login' component={LoginPage}></Route>
        </Switch>      
      </div>
      </Provider>
    </Router>
  );
}

export default App;
