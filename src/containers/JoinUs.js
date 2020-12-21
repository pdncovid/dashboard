import React from "react";
import {Table} from 'react-bootstrap';
import { auto } from '@popperjs/core';

const JoinUs = (props) => {
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
        <b>We are are always looking for enthusiastic students to join our group. Please go through our research, publications and if you come across a topic that you would like to work on, feel free to contact us.</b><br/><br/>

        <Table striped bordered hover style={{width:1000,textAlign:"center",marginLeft:auto,marginRight:auto}}>
                    <tr>
                        <th>If you are a/an</th>
                        <th>You should</th>
                    </tr>
                    <tr>
                        <td>ee.pdn.ac.lk fourth year undergraduate hoping to work on a final year project</td>
                        <td>Contact the Principal Investigator</td>
                    </tr>
                    <tr>
                        <td>ce.pdn.ac.lk or sci.pdn.ac.lk/scs/ fourth year undergraduate hoping to work on a final year project	</td>
                        <td>Contact Dr. Roshan Godaliyadda (for computer vision based topics) or Dr. Vijitha Herath(for data science based topics). Once you have a common interest, contact the PI through an advisor of your department.</td>
                    </tr>
                    <tr>
                        <td>ee.pdn.ac.lk, ce.pdn.ac.lk or sci.pdn.ac.lk/scs undergraduate hoping to work on a project that counts for a requirement on their degree program.	</td>
                        <td>Contact Dr. Roshan Godaliyadda (for computer vision based topics) or Dr. Vijitha Herath(for data science based topics). Once you have a common interest, contact the PI through the specific course coordinator from your department.</td>
                    </tr>
                    <tr>
                        <td>Any pdn.ac.lk undergraduate hoping to work on an extra curricular project	</td>
                        <td>Write to any member of the research group, meet and come up with a project plan.</td>
                    </tr>
                    <tr>
                        <td>Any graduate (with a degree in a related field) hoping to pursue a PG Dip (with research), MPhil or PhD	</td>
                        <td>Look up CERPS website for the official information and contact an academic staff memeber for supervision.</td>
                    </tr>
                </Table>
       
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
