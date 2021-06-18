import React, { Component } from 'react';
import { Card  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends Component {
    render () {
        return (
           
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.image_url} />
            <Card.Body>
                <Card.Title>Title: {this.props.title}</Card.Title>
                <hr></hr>
                <Card.Text>
                Overview: {this.props.overview}
                </Card.Text>
                <hr></hr>
            </Card.Body>
            <Card.Body>
            <Card.Text> 
            Average Votes:  {this.props.average_votes}
            </Card.Text>
            <hr></hr>
            <Card.Text> 
            Total Votes:  {this.props.total_votes}
            </Card.Text>
            <hr></hr>
            <Card.Text> 
            Popularity :  {this.props.popularity}
            </Card.Text>
            <hr></hr>
            <Card.Text> 
            Released on :  {this.props.released_on}
            </Card.Text>
            <hr></hr>
            </Card.Body>
            </Card>
           
        )
    }
}

export default Movies;

//title,overview,average_votes,total_votes,image_url,popularity,released_on