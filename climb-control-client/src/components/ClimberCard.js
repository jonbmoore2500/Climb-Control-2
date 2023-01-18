import React, {useState} from 'react'
import ClimbForm from "./ClimbForm"
import "../modal.css"

function ClimberCard({climber, handleSaveClimb}) {
    
    const [modal, setModal] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [showClimbs, setShowClimbs] = useState(false)

    function toggleModal() {
        setModal(!modal)
    }

    function toggleForm() {
        setShowForm(!showForm)
    }

    function handleSubmit(problemId) {
        let newClimbObj = {climber_id: parseInt(climber.id), problem_id: parseInt(problemId)}
        handleSaveClimb(newClimbObj)
        setShowForm(!showForm)
    }

    function handleCancel() {
        setShowForm(!showForm)
    }

    function toggleShowClimbs() {
        setShowClimbs(!showClimbs)
    }

    return (
        <div>
            <div  onClick={toggleModal} className="cards">
                <h3>{climber.name}</h3>
            </div>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>    
                    <div className="modal-content">
                        <h4>Name: {climber.name}</h4>
                        <h4>Age: {climber.age}</h4>
                        {climber.gym_member ? 
                            <h4>Member of the gym!</h4> : 
                            <h4>Not a member of the gym ☹</h4>}
                        {showForm ? 
                        <ClimbForm climber={climber} handleSubmit={handleSubmit} handleCancel={handleCancel}/>
                        : 
                        <>
                            {climber.climbs.length > 0 ? 
                                <>
                                    <h4>Hardest climb: V{climber.hardest_climb.difficulty} set on {climber.hardest_climb.date_set}</h4>
                                    <h4>Average difficulty climbed: V{climber.average_difficulty}</h4>
                                    <h4>Favorite setter: {climber.favorite_setter}</h4>
                                </> : 
                                <>
                                    <h4>No Climbs data yet:</h4>
                                    <h5>add a climb to see Hardest Climb, Average Difficulty, and Favorite Setter</h5>
                                </>
                            }
                            <button onClick={toggleShowClimbs}>Show climbs?</button>
                            <button onClick={toggleForm}>Add a climb?</button>
                        </>
                        }
                        <button onClick={toggleModal}>Close</button>
                    </div>    
                </div>
            )}
        </div>
    )
}

export default ClimberCard