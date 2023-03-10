import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./Header"
import Home from "./Home"
import Climbers from "./Climbers"
import Problems from "./Problems"
import {ProblemContext} from "../contexts/ProblemContext.js"
import '../App.css';

function App() {

    const [climbersArr, setClimbersArr] = useState([])
    const [problemsArr, setProblemsArr] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/climbers")
        .then(resp => resp.json())
        .then(data => setClimbersArr(data))
    }, [])
    
    useEffect(() => {
        fetch("http://localhost:9292/problems")
        .then(resp => resp.json())
        .then(data => setProblemsArr(data))
    }, [climbersArr])

    function handleSaveProblem(problemObj) {
        fetch("http://localhost:9292/problems", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(problemObj)
        })
        .then(r => r.json())
        .then(data => {
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
        let newClimbers = climbersArr.map((climber) => {
          if (climber.id == climbObj.climber_id) {
            climber = data.climber 
            return climber 
          }
          return climber
        })
        setClimbersArr(newClimbers)
      })
    }

    function handleUpdateProblems(problemObj) {
      const newProblemsArr = problemsArr.map((problem) => {
        if (problem.id == problemObj.id) {
          problem = problemObj
          return problem
        }
        return problem
      })
      setProblemsArr(newProblemsArr)
    }

    function handleDeleteProblem(deleteObj) {
      const newProblemsArr = problemsArr.filter(problem => problem.id != deleteObj.id)
      fetch("http://localhost:9292/climbers")
        .then(resp => resp.json())
        .then(data => {
          setClimbersArr(data)
          setProblemsArr(newProblemsArr)
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
            <Problems 
              saveProblem={handleSaveProblem} 
              handleUpdateProblems={handleUpdateProblems} 
              handleDeleteProblem={handleDeleteProblem}
            />
          </Route>
        </ProblemContext.Provider>
        </Switch>
    </div>
  );
}

export default App;
