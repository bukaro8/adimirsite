import React from 'react'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero';


function App() {

  return (
    <Router>
      <Navbar/>
      
      <Switch>
        <Route>
          <Hero/>
          
        </Route>
        <Route>
        
        </Route>
      </Switch>
    </Router>
  );
}

export default App;