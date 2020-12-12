import React from "react";

const Footer = (props) => {
  return (
    <div
      style={{
        // width: "100%",
        
        paddingTop: 30,
        paddingBottom: 40,
        // paddingLeft:100,
        // marginTop:150,
        backgroundColor:"black",
        color:"white"
      }}
    >
    
    <p style={{marginLeft:150}}>Contact:<br/>
    Prof. Janaka Ekanayake,<br/>
    Princial Investigator,<br/>
    COVID Research Group,<br/>
    Faculty of Engineering,<br/>
    Univeristy of Peradeniya,<br/>
    Peradeniya [20400], Sri Lanka.</p>  
    
    <p style={{textAlign:"center"}}>This website is monitored by Web Consultation Team, University of Peradeniya<br/>
    Last updated : 06/12/2020 15:15:12 (+05:30)</p>
    </div>
  );
};

export default Footer;
