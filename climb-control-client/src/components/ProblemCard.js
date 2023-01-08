import React from "react"

function ProblemCard({problemObj}) {
    console.log(problemObj)
    return (
        <div>
            This problem is a V{problemObj.difficulty}
        </div>
    )
}





export default ProblemCard