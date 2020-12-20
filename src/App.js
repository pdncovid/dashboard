import React from "react";
import "./App.css";
import Home from "./containers/Home";
import News from "./containers/News";
import AboutUs from "./containers/AboutUs";
import { HashRouter, BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Calendar from "./containers/Calendar";
import Links from "./containers/Links";
import Research from "./containers/Research";
import People from "./containers/People";
import Publications from "./containers/Publications";
import JoinUs from "./containers/JoinUs";
import ContactUs from "./containers/ContactUS";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    
        
          <div>
          <NavBar />
          
        
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/links" component={Links} />
          <Route path="/research" component={Research} />
          <Route path="/publications" component={Publications} />
          <Route path="/people" component={People} />
          <Route path="/joinUs" component={JoinUs} />
          <Route path="/contactUs" component={ContactUs} />
          
          
          <Footer></Footer>
          </div>
        
        
     
  );
}

export default App;
