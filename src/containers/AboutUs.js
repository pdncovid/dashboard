import React from "react";

const AboutUs = (props) => {
  return (
    <div className="bg">
      {/* for a margin at the top */}
      <div style={{ height: 50 }}></div>

      <div
        className="mainPanel"
        style={{ width: 1200, height: 1200, marginLeft: 75 }}
      >
        {/* for a margin at the top of the white section */}
        <div style={{ height: 50 }}></div>

        <h1
          style={{
            textAlign: "center",
            fontFamily: "Snell Roundhand,cursive",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          University of Peradeniya : COVID Research group is a multi
          disciplinary group developing technology to combat the COVID-19
          pandemic
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
