import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./Header"
import Home from "./Home"
import Climbers from "./Climbers"
import Problems from "./Problems"
import {ProblemContext} from "../contexts/ProblemContext.js"



function App() {

    const [climbersArr, setClimbersArr] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/climbers")
        .then(resp => resp.json())
        .then(data => setClimbersArr(data))
    }, [])

    const [problemsArr, setProblemsArr] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/problems")
        .then(resp => resp.json())
        .then(data => setProblemsArr(data))
    }, [])
    function handleSaveProblem(problemObj, setterObj) {
        fetch("http://localhost:9292/problems", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(problemObj)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data, problemsArr)
            data.setter = setterObj
            setProblemsArr([...problemsArr, data])
        })
    }
    function saveClimb(climbObj) {
      fetch("http://localhost:9292/climbs", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(climbObj)
      })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        // newClimbers = climbersArr.map((climber) => {

        // })
        // setClimbersArr
      })


    }


  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
        <ProblemContext.Provider value={{problemsArr}}>
          <Route exact path="/climbers" >
            <Climbers climbersArr={climbersArr} saveClimb={saveClimb}/>
          </Route>
          <Route exact path="/problems" >
            <Problems handleSaveProblem={handleSaveProblem}/>
          </Route>
        </ProblemContext.Provider>
        </Switch>
        
    </div>
  );
}

export default App;
