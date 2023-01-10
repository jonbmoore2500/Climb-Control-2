import React, {useState, useRef} from "react"

function EditForm({origDiff, origRemove, handleUpdate, handleCancel}) {

    const dateInputRef = useRef(null)

    const [updatedDiff, setUpdatedDiff] = useState(origDiff)
    const [updatedRemove, setUpdatedRemove] = useState(origRemove)

    function handleOnDiffChange(e) {
        setUpdatedDiff(parseInt(e.target.value))
    }
    function handleOnDateChange(e) {
        setUpdatedRemove(e.target.value)
    }
    function handleOnSaveClick(e) {
        handleUpdate(updatedDiff, updatedRemove)
    }
    function handleCancelClick() {
        handleCancel()
    }

    return (
        <div>
            <label>
                <h5>Edit the selected problem</h5>
                <select onChange={handleOnDiffChange} defaultValue={origDiff}>
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
                <input type="date" onChange={handleOnDateChange} ref={dateInputRef} value={origRemove}/>
                <button onClick={handleOnSaveClick}>Save these changes?</button>
                <button onClick={handleCancelClick}>Cancel editing</button>
            </label>
        </div>
    )

}

export default EditForm