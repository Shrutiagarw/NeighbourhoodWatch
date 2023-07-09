import React from "react";
import img from "../images/background2.jpg";
import "../criminals.css";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";

function Criminals() {
    return (
        <div className="criminals">
            <h1 className="main_head">
                <center> Registered Cases</center>
            </h1>
            <div class="card">
                <img className="criminal_img" src={c1} alt="Avatar" />
                <div class="container">
                    <h4 className="no_margin">
                        <b>Name</b>
                    </h4>
                    <p className="no_margin">Matthew J</p>
                    <h4 className="no_margin">
                        <b>Missing Age</b>
                    </h4>
                    <p className="no_margin">20</p>
                    <h4 className="no_margin">
                        <b>Current Age</b>
                    </h4>
                    <p className="no_margin">49</p>
                    <h4 className="no_margin">
                        <b>Last Seen</b>
                    </h4>
                    <p className="no_margin">Des Moines, IA on 03/07/1991</p>
                    <h4 className="no_margin">
                        <b>Physical Description</b>
                    </h4>
                    <p className="no_margin">
                        Race: White Gender: Male Hair color: Brown Eye Color:
                        Blue Height: 5'10" Weight: 140 lbs
                    </p>
                    <h4 className="no_margin">
                        <b>Case Number</b>
                    </h4>
                </div>
            </div>
            <div class="card">
                <img className="criminal_img" src={c2} alt="Avatar" />
                <div class="container">
                    <h4 className="no_margin">
                        <b>Name</b>
                    </h4>
                    <p className="no_margin">Matthew J</p>
                    <h4 className="no_margin">
                        <b>Missing Age</b>
                    </h4>
                    <p className="no_margin">20</p>
                    <h4 className="no_margin">
                        <b>Current Age</b>
                    </h4>
                    <p className="no_margin">49</p>
                    <h4 className="no_margin">
                        <b>Last Seen</b>
                    </h4>
                    <p className="no_margin">Des Moines, IA on 03/07/1991</p>
                    <h4 className="no_margin">
                        <b>Physical Description</b>
                    </h4>
                    <p className="no_margin">
                        Race: White Gender: Male Hair color: Brown Eye Color:
                        Blue Height: 5'10" Weight: 140 lbs
                    </p>
                    <h4 className="no_margin">
                        <b>Case Number</b>
                    </h4>
                </div>
            </div>
            <div class="card">
                <img className="criminal_img" src={c4} alt="Avatar" />
                <div class="container">
                    <h4 className="no_margin">
                        <b>Name</b>
                    </h4>
                    <p className="no_margin">Matthew J</p>
                    <h4 className="no_margin">
                        <b>Missing Age</b>
                    </h4>
                    <p className="no_margin">20</p>
                    <h4 className="no_margin">
                        <b>Current Age</b>
                    </h4>
                    <p className="no_margin">49</p>
                    <h4 className="no_margin">
                        <b>Last Seen</b>
                    </h4>
                    <p className="no_margin">Des Moines, IA on 03/07/1991</p>
                    <h4 className="no_margin">
                        <b>Physical Description</b>
                    </h4>
                    <p className="no_margin">
                        Race: White Gender: Male Hair color: Brown Eye Color:
                        Blue Height: 5'10" Weight: 140 lbs
                    </p>
                    <h4 className="no_margin">
                        <b>Case Number</b>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Criminals;
