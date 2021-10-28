import React from 'react'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Services from './components/Services';

function App() {

  return (
    <Router>
      <Navbar/>
      
      <Switch>
        <Route>
          <Hero/>
          <Services/>
        </Route>
        <Route>
        
        </Route>
      </Switch>
    </Router>
  );
}

export default App;