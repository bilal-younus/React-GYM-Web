import logo from './logo.svg';
import './App.css';
import React from "react";
import {Counter} from "./Components/Counter";
import {Weather} from "./Components/Weather";
import {investors} from "./Tables/data";
import {Investor} from "./Tables/Investor";

function App() {
  return (
    <div className="App">
      {/*<Counter/>*/}
      {/*{<Weather/>}*/}
      <Investor/>
    </div>
  );
}

export default App;
