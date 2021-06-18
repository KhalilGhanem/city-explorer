import React, { Component } from 'react';
import {Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends Component {

    render() {
        return (

            <div> 
            <Table striped bordered hover size="sm" name='cityTable'>
               <thead>
                 <tr>
                   <th>Date</th>
                   <th>Description</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>{this.props.wdate}</td>
                   <td>{this.props.wdescription}</td>
                </tr> 
                {/* <tr> 
                   <td>{this.props.Wdate1}</td>
                   <td>{this.props.Wdescription1}</td>
                </tr> 
                <tr>    
                   <td>{this.props.Wdate2}</td>
                   <td>{this.props.Wdescription2}</td>
                </tr>  */}
               </tbody>
             </Table>
             <p>{this.props.werror}</p>
             </div>
        )      
    }

}

export default Weather;