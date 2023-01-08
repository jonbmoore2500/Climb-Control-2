import React, {useState} from 'react'
import "../modal.css"

function ClimberCard({climber}) {
// include modal for additional info pop-up. 
    const [modal, setModal] = useState(false)

    function toggleModal() {
        console.log(climber.gym_member)
        setModal(!modal)
    }
    //console.log(modal)

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
                        <button onClick={toggleModal}>Close</button>
                    </div>    
                </div>
            )}
        </div>
    )

}



export default ClimberCard