import React from "react"

function ProblemCard({problemObj, handleClick, selected}) {

    function onClick() {
        handleClick(problemObj.id)
    }

    return (
        <div onClick={onClick} className={`problem-${selected ? "active" : ""}`}>
            V{problemObj.difficulty} set by {problemObj.setter.name}
            . It was set on {problemObj.date_set} and has {problemObj.days_remaining} days left!
        </div>
    )
}





export default ProblemCard