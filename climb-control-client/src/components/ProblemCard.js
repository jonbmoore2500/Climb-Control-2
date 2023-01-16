import React from "react"

function ProblemCard({problemObj, handleClick, selected}) {

    function onClick() {
        handleClick(problemObj.id)
    }

    const numberClimberText = 
        problemObj.number_climbers == 1 ? 
        `${problemObj.number_climbers} climber has climbed this problem.` :
        `${problemObj.number_climbers} climbers have climbed this problem.`

    return (
        <div className="cards">
            <div onClick={onClick} className={`problem-${selected ? "active" : ""}`} >
                V{problemObj.difficulty} set by {problemObj.setter.name}
                . It was set on {problemObj.date_set} and has {problemObj.days_remaining} days left!
                <br></br>
                {problemObj.number_climbers == 8 ? 
                "All of the climbers have climbed this problem!!" : 
                numberClimberText}
            </div>
        </div>
    )
}





export default ProblemCard