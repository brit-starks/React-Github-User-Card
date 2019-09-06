import React from 'react';
import './App.css';

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
    .then(data => this.setState({ myData: data.data}))
    .catch(err => console.log('Could not complete request: ', err));
  };

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
