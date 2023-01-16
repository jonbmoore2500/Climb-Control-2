import React, {useState, useContext} from "react"
import {ProblemContext} from "../contexts/ProblemContext.js"

function ClimbForm({climber, handleSubmit, handleCancel}) {

    const {problemsArr} = useContext(ProblemContext)
    const [problemForClimb, setProblemForClimb] = useState("placeholder")

    function handleOnProblemChange(e) {
        setProblemForClimb(e.target.value)
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        if (problemForClimb != "placeholder") {
            handleSubmit(problemForClimb)
        }
    }

    function handleOnCancel() {
        handleCancel()
    }

    return (
        <div>
            <form>
                <h5>What problem did {climber.name} climb?</h5>
                <select onChange={handleOnProblemChange} >
                    <option value={"placeholder"}>Choose a problem:</option>
                    {problemsArr.map((problem) => (
                        <option key={problem.id} value={problem.id}>V{problem.difficulty} &#40;{problem.climb_type}&#41; set by {problem.setter.name} on {problem.date_set}</option>
                    ))}
                </select>
                <button type="submit" onClick={handleOnSubmit} >Submit?</button>
                <button onClick={handleOnCancel}>Cancel?</button>
            </form>
        </div>
    )
}

export default ClimbForm