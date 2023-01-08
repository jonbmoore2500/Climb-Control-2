import React, {useState, useEffect} from "react"
import ProblemCard from "./ProblemCard"
import ProblemForm from "./ProblemForm"

function Problems() {
    const [problemsArr, setProblemsArr] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:9292/problems")
        .then(resp => resp.json())
        .then(data => setProblemsArr(data))
    }, [])

    function handleSave(problemObj, setterObj) {
        fetch("http://localhost:9292/problems", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(problemObj)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data, problemsArr)
            data.setter = setterObj
            setProblemsArr([...problemsArr, data])
        })
    }

    //console.log("problemsArr", problemsArr)

    return (
        <div>
            <h3> this is my problems component, it will list all the problems and include a form to add new ones or change certain details for existing ones</h3>
            <div>
                {problemsArr.map((problem) => (
                <ProblemCard problemObj={problem} key={problem.id} />
                ))}
            </div>
            <ProblemForm handleSave={handleSave}/>
        </div>

    )


}



export default Problems