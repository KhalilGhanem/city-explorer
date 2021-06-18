import axios from 'axios';
import React from 'react';
import Weather from './components/Weather';
import {Form ,Button, Table ,Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/Movies';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    localData:'',
    errormsg:'',
    citys:'',
    showTable:false,
    showWeather:false,
    diplayMap:false,
    wITEM:{},
    wITEM1:{},
    wITEM2:{},
    weatherdate:'',
    weatherdescription:'',
    werror:'',
    moviesdata:[],
    showMovies:false,
  }
  }
  viewCity = async(event) =>{
    event.preventDefault()
    let city=event.target.city.value;
    let localUrl=`https://us1.locationiq.com/v1/search.php?key=pk.69bb6f4ae8b4a0aa92152b526f92b531&q=${city}&format=json`;
    try {
      
      let localResult=await axios.get(localUrl);
      this.setState({
        localData:localResult.data[0],
        diplayMap:true,
        showTable:true,
        citys:city,
        
      });
      
      const weatherKey=process.env.WEATHER_KEY;
      let weatherurl=`http://localhost:3011/weather?lat=${this.state.localData.lat}&lon=${this.state.localData.lon}&key=d9a174b6fad5447eb9c4f13d929f06c0`;

      axios.get(weatherurl).then(weatherResult =>{
        this.setState({
          weatherdate:weatherResult.data[0].date,
          weatherdescription:weatherResult.data[0].description,
          showWeather:true,
        })
      }).catch(err =>{
        this.setState({
          werror:err.message,
        })
      });

      const MOVIES_KEY=process.env.MOVIES_KEY;
      let moviesurl=`http://localhost:3011/movie?api_key=${MOVIES_KEY}&query=${city}`;
      axios.get(moviesurl).then(moviesResult =>{
        console.log(moviesResult.data);
        this.setState({
          moviesdata:moviesResult.data,
          showMovies:true,
        })
      });


    }
    catch {
      this.setState({
        errormsg:`"error": "Unable to geocode"`,
     
        // displaymsg:true,
      })
    }
  
  }
  render (){
    return(
      <div>
       
        <h1>City Explorer</h1>

         <Form onSubmit={this.viewCity} >
              <Form.Group className="mb-3" >
                <Form.Label>City Name</Form.Label>
                <Form.Control type="text" placeholder="Enter City Name" name='city'/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Explore
              </Button>
         </Form>
         {this.state.showTable && 
         <div> 
         <Table striped bordered hover size="sm" name='cityTable'>
            <thead>
              <tr>
                <th>City Name</th>
                <th>latitude</th>
                <th>longitude</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.localData.display_name}</td>
                <td>{this.state.localData.lat}</td>
                <td>{this.state.localData.lon}</td>
              </tr>
            </tbody>
          </Table>
          </div>
        }
        {this.state.showWeather && 
        <Weather 
          wdate={this.state.weatherdate}
          wdescription={this.state.weatherdescription}
          werror={this.state.werror}
        />
        }
        
      { this.state.showMovies && this.state.moviesdata.map((item,idx)=>{
        return (
          <div key={idx} className='moviesdiv'>
             
            <Movies 
            title={item.title}
            overview={item.overview}
            average_votes={item.average_votes}
            total_votes={item.total_votes}
            image_url={item.image_url}
            popularity={item.popularity}
            released_on={item.released_on}
            />
          </div>  
        )
      })
     ////title,overview,average_votes,total_votes,image_url,popularity,released_on

       }
        {this.state.diplayMap && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.69bb6f4ae8b4a0aa92152b526f92b531&center=${this.state.localData.lat},${this.state.localData.lon}`} alt={'map'} /> }
                
        

        <section>
         
        </section>
        {this.state.errormsg}
      
      </div>
    );
  }
}


export default App;
