
import { useState } from 'react';
import './App.css';

function App() {
  var[now,setTime]=useState("Time")
  function clock(){
    let time = new Date().toLocaleTimeString({hour12: true });
    setTime(time)
    setInterval(clock,1000)
  }
  return (
    <div className="App">
      <h1>{now}</h1>
      <button onClick={clock}>Click Here to get time</button>
    </div>
  );
}

export default App;
