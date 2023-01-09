import React, {useState, useEffect} from "react"

function ClimbForm({climber}) {


    return (
        <div>
            <h4>this is my climb form</h4>
            <label>
                <h5>What problem did {climber.name} climb?</h5>
                {/* <select>

                </select> */}
            </label>
        </div>
    )

}

export default ClimbForm