import React from "react"
import ClimberCard from "./ClimberCard"

function Climbers({climbersArr}) {
    

    return (
        <div>
            <h3>Climbers!</h3>
            <ul>
                {climbersArr.map((climber) => (
                    <ClimberCard climber={climber} key={climber.name}/>
                ))}
            </ul>
        </div>
    ) 


}

export default Climbers