import React, {useState} from "react"

function ProblemForm() {
    const [newDifficulty, setNewDifficulty] = useState("")
    const [newSetterId, setNewSetterId] = useState(0)
    const [newDateSet, setNewDateSet] = useState("2023-01-01")
    const [newDateRemove, setNewDateRemove] = useState("2023-01-02")
    const [newClimbType, setNewClimbType] = useState("")

    // replace with Context setters from initial GET requests
    const tempSetters = [
                        {id: 6, name: "Samantha"}, 
                        {id: 5, name: "Seth"}, 
                        {id: 7, name: "Sinbad"}, 
                        {id: 8, name: "Stephanie"}
                        ]
    

    function handleOnDiffChange(e) {
        // probably better way to do this, but check value length for less than 3 characters
        setNewDifficulty(e.target.value)
    }
    
    function handleOnTypeChange(e) {
        setNewClimbType(e.target.value)
    }

    function handleOnSetterChange(e) {
        // make sure final setter_id is not "placeholder"
        setNewSetterId(e.target.value)
    }


    return (

        <div>
            <h5>this is my problem form!</h5>
            <label>
                <h5>Enter a new problem</h5>
                {/* multiple dropdowns - type, setter. date set will be today, 
                date to be removed will have m/d/y fields. type will be text field */}
                <select onChange={handleOnDiffChange}>
                    <option value="9999">Select a Difficulty</option>
                    <option value="0">V0</option>
                    <option value="1">V1</option>
                    <option value="2">V2</option>
                    <option value="3">V3</option>
                    <option value="4">V4</option>
                    <option value="5">V5</option>
                    <option value="6">V6</option>
                    <option value="7">V7</option>
                    <option value="8">V8</option>
                    <option value="9">V9</option>
                    <option value="10">V10</option>
                    <option value="11">V11</option>
                    <option value="12">V12</option>
                    <option value="13">V13</option>
                </select>
                <input className="newType" onChange={handleOnTypeChange} value={newClimbType} placeholder={"Enter a climb type"} />
                <select onChange={handleOnSetterChange} >
                    <option value={"placeholder"}>Select a Setter</option>
                    {tempSetters.map((setter) => (
                        <option value={setter.id} key={setter.id}>{setter.name}</option>
                    ))}
                </select>
            </label>
        
        </div>
    )


}




export default ProblemForm