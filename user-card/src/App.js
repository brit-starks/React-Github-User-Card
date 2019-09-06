import React from 'react';
import './App.css';

import User from './components/User';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      myData: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/brit-starks')
    .then(res => res.json())
    .then(data => this.setState({ myData: data}))
    .catch(err => console.log('Unable to complete request: ', err));
  };

  render(){
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>User Card App</h1>
          <div className="user">
          {this.state.myData.map( data => (
            <User myData={data} />
          ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
