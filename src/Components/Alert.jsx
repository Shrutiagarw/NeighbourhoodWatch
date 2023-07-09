import React from "react";
import "../alert.css";
import red from "../images/redcircle.png";
import brown from "../images/browncircle.png";

function Alert() {
    return (
        <div className="Alert">
            <img className="p1" src={red} alt="" />
            <img className="p2" src={brown} alt="" />
            <input className="from" type="text" placeholder="from" />
            <input className="to" type="text" placeholder="to" />
            <button className="go">Go</button>
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

export default Alert;
