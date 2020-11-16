import React from 'react';
import NavBar from '../components/NavBar';
import { auto } from '@popperjs/core';

const Research = props=>{
    return(
        <div className="bg">
        <NavBar/>

        {/* for a margin at the top */}
        <div style={{height:50}}></div>
        
        <div className="mainPanel" style={{ width:1200,height:1200, marginLeft:250}}>

        {/* for a margin at the top of the white section */}
        <div style={{height:50}}></div>
        <div>
            <h1 style={{textAlign:"center",fontFamily:"Snell Roundhand,cursive", marginLeft:20,marginRight:20}}>We conduct research in the following thrusts.</h1>

            <ol style={{marginTop:100,width:1000,textAlign:"justify",paddingLeft:200}}>
                <li><b>Data science for combatting COVID Pandemic:</b>
                We are developing algorithms to predict the COVID-19 case counts, outbreaks and severity on different scenarios. We also attemp to quantify the differential impact of COVID-19 on different communities and individuals.</li>

                <li><b>Computer vision for combatting COVID Pandemic:</b>
                We are developing computer vision pipelines to asses the risk and suggest preventive measures for COVID-19 transmission in different scenarios.</li>

                <li><b>Data science for combatting Dengue Pandemic:</b>
                We are developing predictive algorithms to tackle the Dengue outbreaks.</li>
            </ol>
        </div>
        
        
            
            
        </div>
    </div>
    );
}

export default Research;