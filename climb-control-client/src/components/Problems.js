import React, {useState, useEffect, useContext} from "react"
import ProblemCard from "./ProblemCard"
import ProblemForm from "./ProblemForm"
import {ProblemContext} from "../contexts/ProblemContext.js"

function Problems({handleSave}) {
    const {problemsArr} = useContext(ProblemContext)

    //console.log("problemsArr", problemsArr)

    return (
        <div>
            <h3> this is my problems component, it will list all the problems and include a form to add new ones or change certain details for existing ones</h3>
            <div>
                {problemsArr.map((problem) => (
                <ProblemCard problemObj={problem} key={problem.id} />
                ))}
            </div>
            <ProblemForm handleSave={handleSave}/>
        </div>

    )


}



export default Problems