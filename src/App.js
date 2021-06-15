import axios from 'axios';
import React from 'react';
import Weather from './components/Weather';
class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    localData:'',
    errormsg:'',
    citys:'',
    // displaymsg:false,
    diplayMap:false,
    wITEM:{}
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
        citys:city,
      })
      let serverUrl=process.env.REACT_APP_SERVER; 
      console.log(serverUrl);
      const url=`http://localhost:3001/weather?lat=47.60621&lon=-122.33207&searchQuery=${this.state.citys}`;
      let weatherData=await axios.get(url);
      this.setState({
        wITEM:weatherData.data[0],
        
      })
      console.log(weatherData);
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
        <form onSubmit={this.viewCity}>
          <input type='text' name='city' placeholder='Enter A City' />
          <input type='submit' value='Explore' />
        </form>
        <p>City details: {this.state.localData.display_name}</p>
        <p>City latitude{this.state.localData.lat}</p>
        <p>City longitude{this.state.localData.lon}</p>
        {this.state.diplayMap && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.69bb6f4ae8b4a0aa92152b526f92b531&center=${this.state.localData.lat},${this.state.localData.lon}`} alt={'map'} /> }
        
        <section>
          <Weather 
          Wdate={this.state.wITEM.date}
          Wdescription={this.state.wITEM.description}
          />
        </section>
        {this.state.errormsg}
      
      </div>
    );
  }
}


export default App;
