import React from "react";

const Links = (props) => {
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
          <h4 style={{fontFamily:"Snell Roundhand,cursive"}}>Main Links</h4>
          <ul>
            <li>Google Drive</li>
            <li>Mendeley</li>
            <li>Slack Channel</li>
            <li>Email Group</li>
            <li>Github</li>
            <li>Medium</li>
          </ul>
          

          <h4 style={{fontFamily:"Snell Roundhand,cursive"}}>Other Links</h4>
          <ul>
            <li>Work breakdown structure</li>
            <li>Meeting Minutes</li>
          </ul>

          <h4 style={{fontFamily:"Snell Roundhand,cursive"}}>Documents in progress (Requires login)</h4>
          <ul>
            <li>Gihan</li>
          </ul>

          
          <h4 style={{fontFamily:"Snell Roundhand,cursive"}}>Review Paper</h4>
          <ul>
            <li>Submitted PDF</li>
            <li>Overleaf</li>
            <li>Skeleton</li>
            <li>Summary of Papers (Includes Papers, keywords, paper clusters, suggestions for out title and possible journals (and their constraints))</li>
            <li>Diagrams (draw.io link, difficult to open without knowing how it works)</li>
          </ul>

          <h4 style={{fontFamily:"Snell Roundhand,cursive"}}>Meeting Presentations</h4><br/>
          <ol>
          <li> <b>Spatio Temporal forecasting</b>
          <ul>
            <li>Umar</li>
            <li>Harshana</li>
            <li>Rumali</li>
          </ul></li>
         
         <li><b>Computer vision</b>
          <ul>
            <li>Jammel</li>
            <li>Suren</li>
            <li>Gihan</li>
          </ul></li>
          

          </ol>
          
        </div>
        
      </div>
    </div>
  );
};

export default Links;
