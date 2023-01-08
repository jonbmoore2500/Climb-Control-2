import React, {useState} from "react"

function ProblemForm() {
    // const [newProblem, setNewProblem] = useState({
    //     "difficulty": 0, "date_set": "2023-01-01", "date_to_remove": "2023-01-02", "climb_type": "crimpy", "setter_id": 1
    // })
    const [newDifficulty, setNewDifficulty] = useState("0")
    const [newSetterId, setNewSetterId] = useState(0)


    function handleOnDiffChange(e) {
        setNewDifficulty(e.target.value)
    }
    
    function handleOnSetterChange(e) {
        setNewSetterId(e.target.value)
    }


    return (

        <div>
            <h5>this is my problem form!</h5>
            <label>
                <h5>Enter a new problem</h5>
                {/* multiple dropdowns - difficulty, type, setter. date set will be today, 
                date to be removed will have m/d/y fields */}
                <select onChange={handleOnDiffChange}>
                    <option id="placeholder">Select a Difficulty</option>
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
                <select onChange={handleOnSetterChange}>
                    {/* options - display is name, value is id  */}

                </select>
                
            </label>
        
        </div>
    )


}




export default ProblemForm