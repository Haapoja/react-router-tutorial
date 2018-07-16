import React from "react";
import { NavLink } from "react-router-dom"; //basically works like link tags in basic html

const Navigation = () =>{
    return(
<div>
   <NavLink to="/">Home</NavLink>
   <NavLink to="/About">About</NavLink>
   <NavLink to="/Contact">Contact</NavLink>
    </div>


    )
}

export default Navigation;