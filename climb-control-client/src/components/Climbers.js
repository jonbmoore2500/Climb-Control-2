import React, {useState, useEffect} from "react"
import ClimberCard from "./ClimberCard"

function Climbers() {
    const [climbersArr, setClimbersArr] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/climbers")
        .then(resp => resp.json())
        .then(data => setClimbersArr(data))
    }, [])

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