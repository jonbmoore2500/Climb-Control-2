import React, {useState, useRef} from "react"

function ProblemForm({handleSave, settersArr}) {
    
    let today = new Date().toISOString().slice(0, 10)
    const [newDifficulty, setNewDifficulty] = useState("9999")
    const [newSetterId, setNewSetterId] = useState("placeholder")
    const [newDateRemove, setNewDateRemove] = useState("2023-01-01")
    const [newClimbType, setNewClimbType] = useState("")
    const dateInputRef = useRef(null)
    
    function handleOnDiffChange(e) {
        setNewDifficulty(e.target.value)
    }
    function handleOnTypeChange(e) {
        setNewClimbType(e.target.value)
    }
    function handleOnSetterChange(e) {
        setNewSetterId(e.target.value)
    }
    function handleOnDateChange(e) {
        console.log(newDateRemove, e.target.value)
        setNewDateRemove(e.target.value)
    }

    function handleOnSaveClick(e) {
        e.preventDefault()
        let newObj = {
            difficulty: parseInt(newDifficulty),
            date_set: today,
            date_to_remove: newDateRemove,
            climb_type: newClimbType,
            setter_id: parseInt(newSetterId)
        }
        if (newDifficulty.length < 3 && newSetterId != "placeholder" && newDateRemove > today && newClimbType.length > 0) {
            // test all fields for validity
            let newSetterObj = settersArr.find((setter) => setter.id == parseInt(newSetterId))
            handleSave(newObj, newSetterObj) 
        } 
    }

    return (
        <div>
            <label>
                <h5>Enter a new problem</h5>
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
                    {settersArr.map((setter) => (
                        <option value={setter.id} key={setter.id}>{setter.name}</option>
                    ))}
                </select>
                <input type="date" onChange={handleOnDateChange} ref={dateInputRef} value={newDateRemove}/>
                <button onClick={handleOnSaveClick}>Save this problem?</button>
            </label>   
        </div>
    )
}

export default ProblemForm