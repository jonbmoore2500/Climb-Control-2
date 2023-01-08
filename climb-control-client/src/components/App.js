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
        <Home />
        <Climbers />
        {/* <Problems /> */}
        {/* <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/climbers" >
              <Climbers />
            </Route>
        </Switch> */}
        
    </div>
  );
}

export default App;
