import React from 'react';
import './App.css';
import Home from './containers/Home';
import News from './containers/News';
import AboutUs from './containers/AboutUs';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Calendar from './containers/Calendar';
import Links from './containers/Links';
import Research from './containers/Research';
import People from './containers/People';
import Publications from './containers/Publications';
import JoinUs from './containers/JoinUs';
import ContactUs from './containers/ContactUS';
import NavBar from './components/NavBar';
import Footer from './components/Footer'


function App() {
  return (
    <div>
    <NavBar/>
    <div style={{
          paddingTop: 52,
          paddingLeft: 72,
          paddingRight: 72,
          height: "100vh",
          
        }}>
    <Router>
      

        <Route exact path="/" component={Home}/>
        <Route exact path="/news" component={News}/>
        <Route exact path="/aboutUs" component={AboutUs}/>   
        <Route exact path="/calendar" component={Calendar}/>
        <Route exact path="/links" component={Links}/>
        <Route exact path="/research" component={Research}/>
        <Route exact path="/publications" component={Publications}/>
        <Route exact path="/people" component={People}/>
        <Route exact path="/joinUs" component={JoinUs}/>
        <Route exact path="/contactUs" component={ContactUs}/>

      

    </Router>
    <Footer></Footer>
    </div>
    
    
    </div>
  );
}

export default App;
