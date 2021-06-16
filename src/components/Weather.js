import React, { Component } from 'react';

class Weather extends Component {

    render() {
        return (
            <div>
                <p>Date: {this.props.Wdate}</p>
                <p>Description: {this.props.Wdescription}</p>
                <p>Date: {this.props.Wdate1}</p>
                <p>Description: {this.props.Wdescription1}</p>
                <p>Date: {this.props.Wdate2}</p>
                <p>Description: {this.props.Wdescription2}</p>
            </div>
        )
    }

}

export default Weather;