import React from "react"

function ProblemCard({problemObj}) {
    console.log(problemObj)
    return (
        <div>
            V{problemObj.difficulty} set by {problemObj.setter.name}
            . It was set on {problemObj.date_set} and has {problemObj.days_remaining} days left!
        </div>
    )
}





export default ProblemCard