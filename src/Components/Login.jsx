import React from "react";

import { NavLink } from "react-router-dom";
import "../login.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import logo from "../images/logo2.png";

library.add(faFacebookF, faGoogle);
function Login() {
    return (
        <div className="LoginPage">
            <div className="login_form">
                <img className="logo_login" src={logo} alt="" />
                <h2>Login</h2>

                <p className="para">
                    Login with email or your social media account to create and
                    manage alerts.
                </p>
                <p className="para">Email Address</p>
                <input className="email_space" type="email" />
                <NavLink to="/about">
                    <input type="button" className="next_button" value="Next" />
                </NavLink>
                <br />
                <br />

                <span>
                    Don't have an account?
                    <NavLink to="/signup">Sign Up</NavLink>
                </span>
                <br />
                <br />

                <p className="para">
                    This site is protected by reCAPTCHA and the Google
                </p>
                <p className="para">
                    Privacy <u>Policy </u>and
                    <u>Terms of Service</u>
                    apply.
                </p>

                <hr />
                <p className="para">or</p>

                <button className="facebook">
                    <FontAwesomeIcon
                        className="icon"
                        icon={["fab", "facebook-f"]}
                    />
                    Continue With FaceBook
                </button>

                <button className="google">
                    <FontAwesomeIcon
                        className="icon"
                        icon={["fab", "google"]}
                    />
                    Continue With Google
                </button>

                <hr />

                <p>Terms of Use | Privacy Policy</p>
            </div>
        </div>
    );
}

export default Login;
