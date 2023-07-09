import React from "react";
import "../form.css";
function Form() {
    return (
        <div className="form_page">
            <center>
                <form className="form" action="">
                    <h1 className="form_text">Name</h1>
                    <input
                        className="box"
                        type="text"
                        placeholder="Enter Name"
                    />
                    <h1 className="form_text">Age</h1>
                    <input
                        className="box"
                        type="text"
                        placeholder="Enter Age"
                    />
                    <h1 className="form_text">Crime-Type</h1>
                    <select className="box" name="crime-type" id="">
                        <option value="">Murder</option>
                        <option value="">Theft</option>
                        <option value="">Kidnapping</option>
                        <option value="">Snatching</option>
                    </select>
                    <h1 className="form_text">Crime-Description</h1>
                    <textarea
                        className="description box"
                        name=""
                        id=""
                        cols="50"
                        rows="5"
                        placeholder="Describe About the Event"
                    ></textarea>
                    <br />
                    <button className="form_btn box">Submit</button>
                </form>
            </center>
        </div>
    );
}

export default Form;
