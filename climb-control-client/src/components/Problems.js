import React, {useState, useEffect, useContext} from "react"
import ProblemCard from "./ProblemCard"
import ProblemForm from "./ProblemForm"
import EditForm from "./EditForm"
import {ProblemContext} from "../contexts/ProblemContext.js"

function Problems({handleSaveProblem, handleUpdateProblems}) {
    const {problemsArr} = useContext(ProblemContext)
    const remainingProblems = problemsArr.filter((problem) => problem.days_remaining > 0)
    
    const [editId, setEditId] = useState(0)
    const editProblem = remainingProblems.find((problem) => problem.id == editId)

    const [settersArr, setSettersArr] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/setters")
        .then(resp => resp.json())
        .then(data => setSettersArr(data))
    }, [])

    function handleClick(id) {
        setEditId(id)
    }

    function handleUpdate(diff, remove) {
        fetch(`http://localhost:9292/problems/${editId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            difficulty: diff,
            date_to_remove: remove
        })
        })
        .then(r => r.json())
        .then(data => {
            setEditId(0)
            handleUpdateProblems(data)
        })
    }

    function handleCancel() {
        setEditId(0)
    }

    return (
        <div>
            <h3>Problems!</h3>
            <h4>Select a problem to edit its difficulty or removal date</h4>
            {/* add a way to favorite (non-persistent) a given problem, then move 
            favorites to front of the line in ClimbForm. long term project */}
            <div>
                {remainingProblems.map((problem) => (
                <ProblemCard problemObj={problem} key={problem.id} handleClick={handleClick} selected={editId == problem.id}/>
                ))}
            </div>
            {editId > 0 ?
            <EditForm 
                origDiff={editProblem.difficulty} 
                origRemove={editProblem.date_to_remove} 
                handleUpdate={handleUpdate} 
                handleCancel={handleCancel}
                /> :
            null
            }
            <ProblemForm handleSave={handleSaveProblem} settersArr={settersArr}/>
        </div>

    )


}



export default Problems