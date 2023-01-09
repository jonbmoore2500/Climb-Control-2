import React from "react"
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div className="navBar">
            <NavLink to="/" exact className="nav">Home</NavLink>
            <NavLink to="/climbers" exact className="nav">Climbers</NavLink>
            {/* <NavLink to="/Random" exact className="nav">Get a Recommendation</NavLink>
            <NavLink to="/BuildTeams" exact className="nav">Build a Team</NavLink> */}
        </div>
    )
}

export default NavBar