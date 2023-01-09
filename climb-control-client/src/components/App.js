import React, {useState} from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./Header"
import Home from "./Home"
import Climbers from "./Climbers"
import Problems from "./Problems"



function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/climbers" >
            <Climbers />
          </Route>
          <Route exact path="/problems" >
            <Problems />
          </Route>
        </Switch>
        
    </div>
  );
}

export default App;
