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

    //console.log("problemsArr", problemsArr)

    return (
        <div>
            <h3> this is my problems component, it will list all the problems and include a form to add new ones or change certain details for existing ones</h3>
            {/* <div>
                {problemsArr.map((problem) => {
                <ProblemCard problemObj={problem} key={problem.id} />
                // why won't this render?
                console.log(problem.id, "testing", problem.climb_type)
                })}
            </div> */}
            <h3> testing</h3>
            <ProblemForm />
        </div>

    )


}



export default Problems