import React from 'react';
import Game from './components/game';
import "./App.css";

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{color:"#14bdac"}}>X-O-X</h1>
          <Game />      
        </header>
      </div>
    );
  }
}

export default App;
