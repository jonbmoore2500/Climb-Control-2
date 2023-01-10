import React, {useState, useEffect, useContext} from "react"
import ProblemCard from "./ProblemCard"
import ProblemForm from "./ProblemForm"
import {ProblemContext} from "../contexts/ProblemContext.js"

function Problems({handleSaveProblem}) {
    const {problemsArr} = useContext(ProblemContext)
    const remainingProblems = problemsArr.filter((problem) => problem.days_remaining > 0)
    

    const [settersArr, setSettersArr] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/setters")
        .then(resp => resp.json())
        .then(data => setSettersArr(data))
    }, [])

    return (
        <div>
            <h3>Problems!</h3>
            <h4>Select a problem to edit its difficulty or removal date</h4>
            {/* add a way to favorite (non-persistent) a given problem, then move 
            favorites to front of the line in ClimbForm. long term project */}
            <div>
                {remainingProblems.map((problem) => (
                <ProblemCard problemObj={problem} key={problem.id} />
                ))}
            </div>
            <ProblemForm handleSave={handleSaveProblem} settersArr={settersArr}/>
        </div>

    )


}



export default Problems