import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      myData: []
    }
  }



  render(){
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>User Card App</h1>
        </header>
      </div>
    );
  }
}

export default App;
