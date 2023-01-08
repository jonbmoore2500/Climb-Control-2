import React from "react"

function ProblemCard({problemObj}) {
    console.log(problemObj)
    return (
        <div>
            This problem is a V{problemObj.difficulty} set by {problemObj.setter.name}
        </div>
    )
}





export default ProblemCard