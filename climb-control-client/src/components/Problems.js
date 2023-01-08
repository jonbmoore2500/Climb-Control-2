import React, {useState, useEffect} from "react"
import ProblemCard from "./ProblemCard"

function Problems() {
    const [problemsArr, setProblemsArr] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/problems")
        .then(resp => resp.json())
        .then(data => setProblemsArr(data))
    }, [])

    //console.log(problemsArr)

    return(

        <div>
            <h3> this is my problems component, it will list all the problems and include a form to add new ones or change certain details for existing ones</h3>
            {/* <ProblemForm /> */}
            <ul>
                {problemsArr.map((problem) => {
                    // <ProblemCard key={problem.id} problem={problem}/>
                    <li>{problem.date_to_remove}</li>
                })}
            </ul>
            <h3> testing</h3>
        </div>

    )


}



export default Problems