import React from "react"
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div className="navBar">
            <NavLink to="/" exact className="nav">Home</NavLink>
            <NavLink to="/climbers" exact className="nav">Climbers</NavLink>
            <NavLink to="/problems" exact className="nav">Problems</NavLink>
        </div>
    )
}

export default NavBar