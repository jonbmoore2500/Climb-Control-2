import React, {useState} from "react"
//import { Route, Switch } from "react-router-dom"

import Header from "./Header"
import Home from "./Home"
import Climbers from "./Climbers"


function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Climbers />
    </div>
  );
}

export default App;
