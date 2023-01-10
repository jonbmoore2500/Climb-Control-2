import React, {useState, useContext} from "react"
import {ProblemContext} from "../contexts/ProblemContext.js"

function ClimbForm({climber, handleSubmit, handleCancel}) {
    const {problemsArr} = useContext(ProblemContext)
    const [problemForClimb, setProblemForClimb] = useState(0)

    function handleOnProblemChange(e) {
        setProblemForClimb(e.target.value)
    }
    function handleOnSubmit(e) {
        if (problemForClimb != "placeholder") {
            handleSubmit(problemForClimb)
        }
    }
    function handleOnCancel(e) {
        handleCancel()
    }

    return (
        <div>
            {/* <h4>this is my climb form</h4> */}
            <label>
                <h5>What problem did {climber.name} climb?</h5>
                <select onChange={handleOnProblemChange} >
                    <option value={"placeholder"}>Choose a problem:</option>
                    {problemsArr.map((problem) => (
                        <option key={problem.id} value={problem.id}>V{problem.difficulty} &#40;{problem.climb_type}&#41; set by {problem.setter.name} on {problem.date_set}</option>
                    ))}
                </select>
                <button onClick={handleOnSubmit}>Submit?</button>
                <button onClick={handleOnCancel}>Cancel?</button>
            </label>
        </div>
    )

}

export default ClimbForm