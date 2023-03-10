import React, {useState, useRef} from "react"

function ProblemForm({handleSave, settersArr}) {
    
    const dateInputRef = useRef(null)
    let today = new Date().toISOString().slice(0, 10)
    
    const [newDifficulty, setNewDifficulty] = useState("")
    const [newSetterId, setNewSetterId] = useState("")
    const [newDateRemove, setNewDateRemove] = useState(today)
    const [newClimbType, setNewClimbType] = useState("")
    
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
        setNewDateRemove(e.target.value)
    }

    function handleOnSaveSubmit(e) {
        e.preventDefault()
        let newObj = {
            difficulty: parseInt(newDifficulty),
            date_set: today,
            date_to_remove: newDateRemove,
            climb_type: newClimbType,
            setter_id: parseInt(newSetterId)
        }
        if (newDifficulty.length > 0 && newSetterId != "" && newDateRemove > today && newClimbType.length > 0) {
            handleSave(newObj) 
            setNewDifficulty("")
            setNewClimbType("")
            setNewSetterId("")
            setNewDateRemove(today)
        } 
    }

    return (
        <div>
            <form onSubmit={handleOnSaveSubmit}>
                <h5>Enter a new problem</h5>
                <select onChange={handleOnDiffChange} value={newDifficulty}>
                    <option>Select a Difficulty</option>
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
                <select onChange={handleOnSetterChange} value={newSetterId}>
                    <option >Select a Setter</option>
                    {settersArr.map((setter) => (
                        <option value={setter.id} key={setter.id}>{setter.name}</option>
                    ))}
                </select>
                <input type="date" onChange={handleOnDateChange} ref={dateInputRef} value={newDateRemove}/>
                <button type="submit" >Save this problem?</button>
            </form>   
        </div>
    )
}

export default ProblemForm