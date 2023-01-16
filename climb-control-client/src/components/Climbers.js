import React from "react"
import ClimberCard from "./ClimberCard"

function Climbers({climbersArr, saveClimb}) {
    
    function handleSaveClimb(obj) {
        saveClimb(obj)
    }

    return (
        <div>
            <h2>Climbers!</h2>
            {/* <ul> */}
                {climbersArr.map((climber) => (
                    <ClimberCard climber={climber} key={climber.name} handleSaveClimb={handleSaveClimb}/>
                ))}
            {/* </ul> */}
        </div>
    ) 
}

export default Climbers