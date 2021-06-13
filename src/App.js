import React from 'react';
class App extends React.Component {
  render (){
    return(
      <div>
        <h1>City Explorer</h1>
        <form>
          <input type='text' name='city' placeholder='Enter A City' />
          <input type='submit' value='Explore' />
        </form>
      </div>
    );
  }
}


export default App;
