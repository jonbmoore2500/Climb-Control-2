import React from "react"

function ClimbsList({climbs, handleClose}) {

    function handleOnClose() {
        handleClose()
    }

    return (
        <div>
            <ul className="climbsList">
                {climbs.map((c) => (
                    <li key={c.id}>V{c.problem.difficulty} &#40;{c.problem.climb_type}&#41; on {c.date_climbed}. Setter: {c.problem.setter.name}</li>
                ))}
            </ul>
            <button onClick={handleOnClose}>Cancel?</button>
        </div>
    )

}

export default ClimbsList