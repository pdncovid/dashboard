import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './containers/Home';
import News from './containers/News';
import AboutUs from './containers/AboutUs';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Calendar from './containers/Calendar';
import Links from './containers/Links';
import Research from './containers/Research';
import People from './containers/People';
import Publications from './containers/Publications';
import JoinUs from './containers/JoinUs';
import ContactUs from './containers/ContactUS';


function App() {
  return (
    <Router>
      <div className="App">

        <Route path="/" exact component={Home}/>
        <Route path="/news" component={News}/>
        <Route path="/aboutUs" component={AboutUs}/>   
        <Route path="/calendar" component={Calendar}/>
        <Route path="/links" component={Links}/>
        <Route path="/research" component={Research}/>
        <Route path="/publications" component={Publications}/>
        <Route path="/people" component={People}/>
        <Route path="/joinUs" component={JoinUs}/>
        <Route path="/contactUs" component={ContactUs}/>

      </div>

    </Router>
    
  );
}

export default App;
