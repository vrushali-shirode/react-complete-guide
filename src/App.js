import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput'

class App extends Component {
    state = {
        userName : "Harvey Spector"
    }
    changeUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
  render() {
    return (
      <div className="App">
        <button onClick={this.changeUserName}>Click Me!</button>
        <UserInput change={this.changeUserName} name={this.state.userName}/>
        <UserOutput name={this.state.userName}/>
        <UserOutput name="Vrushali"/>
      </div>
    );
  }
}

export default App;
