import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
      
         <Route exact path="/" component = {Home} />
        
      </Router>
    );
  };
};

export default App;
