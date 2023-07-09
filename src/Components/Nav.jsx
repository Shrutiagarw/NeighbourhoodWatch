import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import logo from "../images/logo2.png";

function Nav() {
    return (
        <div className="all">
            <div className="navbar">
                <div className="navbar__title navbar__item">
                    <img className="logo" src={logo} alt="" />
                </div>

                <Button className="navbar__item nav_button" to="/about">
                    Get Started
                </Button>
                <NavLink className="navbar__item" to="/about">
                    About Us
                </NavLink>
                <NavLink className="navbar__item" to="/login">
                    Login
                </NavLink>
            </div>
        </div>
    );
}

export default Nav;
