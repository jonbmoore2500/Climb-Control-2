import React, {useState, useRef} from "react"

function ProblemForm() {
    // let today = new Date().toISOString().slice(0, 10)
    const [newDifficulty, setNewDifficulty] = useState("9999")
    const [newSetterId, setNewSetterId] = useState("placeholder")
    //const [newDateSet, setNewDateSet] = useState("2023-01-01") just use new Date in POST request
    const [newDateRemove, setNewDateRemove] = useState("2023-01-01")
    const [newClimbType, setNewClimbType] = useState("")

    const dateInputRef = useRef(null)

    // replace with Context setters from initial GET requests
    const tempSetters = [
                        {id: 6, name: "Samantha"}, 
                        {id: 5, name: "Seth"}, 
                        {id: 7, name: "Sinbad"}, 
                        {id: 8, name: "Stephanie"}
                        ]
    
    function handleOnDiffChange(e) {
        // probably better way to do this, but check value length for less than 3 characters
        // handle at submit phase
        setNewDifficulty(e.target.value)
    }
    
    function handleOnTypeChange(e) {
        setNewClimbType(e.target.value)
    }

    function handleOnSetterChange(e) {
        // make sure final setter_id is not "placeholder"
        setNewSetterId(e.target.value)
    }

    function handleOnDateChange(e) {
        console.log(newDateRemove, e.target.value)
        setNewDateRemove(e.target.value)
    }

    return (

        <div>
            <h5>this is my problem form!</h5>
            <label>
                <h5>Enter a new problem</h5>
                {/* multiple dropdowns - type, setter. date set will be today, 
                date to be removed will have m/d/y fields. type will be text field */}
                <select onChange={handleOnDiffChange} defaultValue={newDifficulty}>
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
                    <option value={newSetterId}>Select a Setter</option>
                    {tempSetters.map((setter) => (
                        <option value={setter.id} key={setter.id}>{setter.name}</option>
                    ))}
                </select>
                <input type="date" onChange={handleOnDateChange} ref={dateInputRef} value={newDateRemove}/>
            </label>
        
        </div>
    )


}




export default ProblemForm