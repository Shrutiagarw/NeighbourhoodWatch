import React from "react";
import { NavLink } from "react-router-dom";
import "../fake.css";
function Fake() {
    return (
        <div className="Fake">
            <input className="from" type="text" placeholder="from" />
            <input className="to" type="text" placeholder="to" />
            <NavLink to="/alert">
                <button className="go">Go</button>
            </NavLink>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
        </div>
    );
}


export default Fake;
