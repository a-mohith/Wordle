import React from 'react'
import './App.css'
import Game from './Component/Game'


function App() {
  const reloadGame=()=>{
    
    window.location="/"
  }
  return (
    <div className="App">
      <div className='heading'>
        Wordle Game
      </div>
      <Game reloadGame={reloadGame}/>
    </div>
  );
}

export default App;
