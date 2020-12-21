import React from "react";

const Publications = (props) => {
  return (
    <div className="bg">
      {/* for a margin at the top */}
      <div style={{ height: 50 }}></div>

      <div
        className="mainPanel container"
        
      >
        {/* for a margin at the top of the white section */}
        <div style={{ height: 50 }}></div>

        <div style={{marginLeft:50,marginRight:50}}>
        

        <h4 style={{fontFamily:"Snell Roundhand,cursive"}}>PEER REVIEWED PUBLICATIONS</h4>
        <h5><b>Preprints</b></h5>
          <ul>
            <li>Gihan Jayatilaka*, Jameel Hassan*, Umar Marikkar, Rumali Perera, Suren Sritharan, Harshana Weligampola, Mevan Ekanayake, Roshan Godaliyadda, Parakrama Ekanayake, Vijitha Herath, G.M. Dilshan Godaliyadda, Anuruddhika Rathnayake, Samath D. Dharmaratne, Janaka Ekanayake (2020). Use of Artificial Intelligence on spatio-temporal data to generate insights during COVID-19 pandemic: A Review. medRxiv preprint. [Abstract, PDF]</li>
          </ul>


        <h4 style={{fontFamily:"Snell Roundhand,cursive"}}>NON PEER REVIEWED PUBLICATIONS</h4>
        <ul>
          <li><b>Is R0 Actually Meaningful for COVID-19?</b><br/>
          <em>by Isuru Pamuditha</em><br/><br/>
          Mathematical modelling and their predictions are used in many fields in the present and the same strategy comes in handy in studying the nature and growth of pandemics as well. Studying the exponential growth, behavioural patterns of the society, modelling the strength of such a disease are some examples for similar use cases. ‘Basic Reproduction Number — (R0)’ is one such parameter... [Read more]</li><br/><br/>
       
          <li><b>The Chinese response for Covid19 (The SARS Cov-19 vaccine developed by Sinovac Biotech Ltd., Beijing, China)</b><br/>
          <em>by Beshan Waduge</em><br/><br/>
          Sinovac has already presented the world successful vaccines to prevent Hepatitis, H1N1, Japanese encephalitis etc… and now they are developing a vaccine candidate for COVID-19 which they have branded CoronaVac. [Read more]</li><br/><br/>
        
          <li><b>Sputnik V launched again! (The SARS Cov-19 vaccine developed by the Gamaleya research institute, Russia)</b><br/>
          <em>by Beshan Waduge</em><br/><br/>
          On August 12th President Vladimir Putin made a huge announcement to the world calming that Russia has developed a successful vaccine for SARS-Cov19 despite having no published research papers on the clinical trials of the vaccine. [Read more]</li><br/><br/>

          <li><b>COVID-19 vaccine by the University of Oxford and AstraZeneca PLC (ChAdOx nCoV-19)</b><br/>
          <em>by Beshan Waduge</em><br/><br/>
          The COVID-19 vaccine by the University of Oxford has completed the first two phases of the clinical development in the United Kingdom and has been expanded into a Phase III clinical trial. [Read more]</li><br/><br/>

        </ul>

        </div>
      </div>
      <div style={{ height: 50 }}></div>
    </div>
  );
};

export default Publications;
