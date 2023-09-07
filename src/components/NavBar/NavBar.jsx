import { Link } from "react-router-dom"
import React from "react"

export default function NavBar(){
   
    return(
    
        <nav>
            <Link to="/"></Link>
            &nbsp;| &nbsp;
            <span>Welcome,</span>
            &nbsp;| &nbsp;
            <Link to="/">Movie List</Link>
            &nbsp;| &nbsp;
            <Link to="/actors">Actor List</Link>
            &nbsp;| &nbsp;
            <Link to="/">Log in</Link>
            &nbsp;| &nbsp;
            <Link to="" >Log Out</Link>
        </nav>
    
    )
}