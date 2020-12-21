import React from "react";

const People = (props) => {
  return (
    <div className="bg">
      {/* for a margin at the top */}
      <div style={{ height: 50 }}></div>

      <div
        className="mainPanel"
        style={{ width: 1200, height: 1200, marginLeft: 150 }}
      >
        {/* for a margin at the top of the white section */}
        <div style={{ height: 50 }}></div>
        <div style={{marginLeft:50,marginRight:50}}>
          <h4 style={{fontFamily:"Snell Roundhand,cursive"}}>Principal Investigator</h4>
          <ul>
            <li>Prof. Janaka Ekanayake (Professor of Electrical and Electronic Engineering, eng.pdn.ac.lk)</li>
          </ul>
          

          <h4 style={{fontFamily:"Snell Roundhand,cursive"}}>Faculty</h4>
          <ul>
            <li>Prof. Samath Dharmaratne (Professor of Community Medicine, med.pdn.ac.lk)</li>
            <li>Dr. Roshan Godaliyadda (Senior Lecturer of Electrical and Electronic Engineering, eng.pdn.ac.lk)</li>
            <li>Dr. Vijitha Herath (Senior Lecturer of Electrical and Electronic Engineering, eng.pdn.ac.lk)</li>
            <li>Dr. Parakrama Ekanayake (Senior Lecturer of Electrical and Electronic Engineering, eng.pdn.ac.lk)</li>
            <li>Dr. Anuruddhika Rathnayake (Registrar of Community Medicine, pgim.cmb.ac.lk)</li>
            <li>Prof. Mallika Pinnawala (Professor of Sociology, arts.pdn.ac.lk)</li>
            <li>Dr. Sakunthala Yatigammana Ekanayake (Senior Lecturer of Education, arts.pdn.ac.lk)</li>
          </ul>

          <h4 style={{fontFamily:"Snell Roundhand,cursive"}}>Research Assistants</h4>
          <ul>
            <li>Mr. Mevan Ekanayake (Research Assistant, sltc.ac.lk)</li>
            <li>Mr. Gihan Jayatilaka (Research Assistant, eng.pdn.ac.lk)</li>
            <li>Mr. Jameel Hassan (Research Assistant, eng.pdn.ac.lk)</li>
            <li>Mr. Umar Marikkar (Research Assistant, eng.pdn.ac.lk)</li>
            <li>Mr. Harshana Weligampola (Research Assistant, sltc.ac.lk)</li>
            <li>Mr. Suren Sritharan (Research Assistant, sltc.ac.lk)</li>
            <li>Ms. Rumali Perera (Instructor, sci.pdn.ac.lk)</li>
          </ul>

          
          <h4 style={{fontFamily:"Snell Roundhand,cursive"}}>Undergraduates</h4>
          <ul>
            <li>Ms. Chathurika Jayasani (Undergraduate, eng.pdn.ac.lk)</li>
            <li>Ms. DC Pipuni (Undergraduate, eng.pdn.ac.lk)</li>
            <li>Ms. Sankani Sarachchandra (Undergraduate, eng.pdn.ac.lk)</li>
            <li>Mr. Isuru Pamuditha (Undergraduate, eng.pdn.ac.lk)</li>
          </ul>

          <h4 style={{fontFamily:"Snell Roundhand,cursive"}}>Pre-Undergraduates</h4>
          <ul>
            <li>Mr. Beshan Waduge (To be undergraduate, med.pdn.ac.lk)</li>
            <li>Harshana</li>
            <li>Rumali</li>
          </ul>
          
        
        
      </div>
      </div>
    </div>
  );
};

export default People;
