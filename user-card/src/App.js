import React from 'react';
import './App.css';
import './app.scss';

import UserHeader from './components/header/UserHeader';
import UserDesription from './components/description/UserDescpristion';
import NavBar from './components/header/NavBar';

class App extends React.Component {

  state = {
      myData: []
  };

  componentDidMount() {
    fetch('https://api.github.com/users/brit-starks')
    .then(res => res.json())
    .then(res => this.setState({ myData: res }))
    .then(res => console.log(res))
    .catch(err => console.log('Unable to Complete Request'));
  };
  
  render(){
    return (
      <>
        <NavBar />

      <div className="App">
        <UserHeader data={this.state.myData}/>
        <UserDesription data={this.state.myData} />
      </div>
      </>
    );
  }
}

export default App;
