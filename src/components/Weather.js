import React, { Component } from 'react';

class Weather extends Component {

    render() {
        return (
            <div>
                <p>Date: {this.props.Wdate}</p>
                <p>Description: {this.props.Wdescription}</p>
            </div>
        )
    }

}

export default Weather;