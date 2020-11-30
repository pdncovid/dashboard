import React from 'react';
import {Table} from 'react-bootstrap';
import { auto } from '@popperjs/core';

const News = props=>{
    return(

        <div className="bg">
            

            {/* for a margin at the top */}
            <div style={{height:50}}></div> 
            
            <div className="mainPanel" style={{ width:1200,height:1200, marginLeft:75}}>

            {/* for a margin at the top */}
            <div style={{height:50}}></div>

            
                <Table striped bordered hover style={{width:500,textAlign:"center",marginLeft:auto,marginRight:auto}}>
                    <tr>
                        <th>Date</th>
                        <th>Event</th>
                    </tr>
                    <tr>
                        <td>2020/08/20</td>
                        <td>Website live</td>
                    </tr>
                    <tr>
                        <td>2020/08/01</td>
                        <td>The group starts work</td>
                    </tr>
                </Table>
                
                
            </div>
        </div>
    );

}

export default News;