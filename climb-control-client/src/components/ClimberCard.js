import React, {useState} from 'react'
import ClimbForm from "./ClimbForm"
import "../modal.css"

function ClimberCard({climber, handleSaveClimb}) {

// create toggle for form to add climb. use Context for available problems
    const [modal, setModal] = useState(false)
    const [showForm, setShowForm] = useState(false)

    function toggleModal() {
        //console.log(climber.gym_member)
        setModal(!modal)
    }
    function toggleForm() {
        setShowForm(!showForm)
    }

    function handleSubmit(problemId) {
        let newClimbObj = {climber_id: parseInt(climber.id), problem_id: parseInt(problemId)}
        handleSaveClimb(newClimbObj)
    }
    function handleCancel(e) {
        setShowForm(!showForm)
    }

    return (
        <div>
            <div>
                <h3 onClick={toggleModal}>{climber.name}</h3>
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
                        {/* <h4>Name: {climber.name}</h4> will include info about hardest climb or average climb or something */}
                        {showForm ? 
                        <ClimbForm climber={climber} handleSubmit={handleSubmit} handleCancel={handleCancel}/>
                        : <button onClick={toggleForm}>Add a climb?</button>
                        }
                        <button onClick={toggleModal}>Close</button>
                    </div>    
                </div>
            )}
        </div>
    )

}



export default ClimberCard