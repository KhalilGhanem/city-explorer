import axios from 'axios';
import React from 'react';
class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    localData:' ',
  }
  }
  viewCity = async(event) =>{
    event.preventDefault()
    let city=event.target.city.value;
    let localUrl=`https://us1.locationiq.com/v1/search.php?key=pk.69bb6f4ae8b4a0aa92152b526f92b531&q=${city}&format=json`;
    let localResult=await axios.get(localUrl);
    console.log(localResult.data);
    console.log(city);
    this.setState({
      localData:localResult.data[0],
    })
  }
  render (){
    return(
      <div>
        <h1>City Explorer</h1>
        <form onSubmit={this.viewCity}>
          <input type='text' name='city' placeholder='Enter A City' />
          <input type='submit' value='Explore' />
        </form>
        <p>{this.state.localData.display_name}</p>
        <p>{this.state.localData.lat}</p>
        <p>{this.state.localData.lon}</p>
      </div>
    );
  }
}


export default App;
