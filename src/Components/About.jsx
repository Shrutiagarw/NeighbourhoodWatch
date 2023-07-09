import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import img from "../images/background2.jpg";
import form from "../images/form.png";
import map from "../images/aboutimg1.jpeg";
import item1 from "../images/aboutimg1.jpeg";
import "../about.css";
import Nav from "./Nav";
import gif from "../images/about_gif.gif";
import route from "../images/route.jpeg";
import { NavLink } from "react-router-dom";
import logo from "../images/logo2.png";

function About() {
    return (
        <div className="about">
            <a href="#part2">
                <h1 className="scroll">About</h1>
            </a>
            <div className="part1" id="about">
                <img className="top_animation" src={logo} alt="" />
            </div>
            <div className="part2" id="part2">
                <center>
                    <h1 className="our_service">
                        {" "}
                        <br />
                        <u> Our Services</u>
                    </h1>
                </center>
                <div className="container">
                    <div className="container_item">
                        <div className="content">
                            <h3 className="head">Search For a Safe Locality</h3>
                            <p className="parag">
                                <i>
                                    User can take insight of the place where
                                    he/she is looking <br /> for buying a house
                                    in future through our interactive map.
                                </i>
                            </p>
                        </div>

                        <NavLink to="/">
                            <img className="item_img" src={map} alt="" />
                        </NavLink>
                    </div>
                </div>
                <div className="container">
                    <div className="container_item">
                        <NavLink to="/form">
                            <img className="item_img" src={form} alt="" />
                        </NavLink>
                        <div className="content">
                            <h3 className="head">Register A Crime</h3>
                            <p className="parag">
                                <i>
                                    User can register for a crime by filling the
                                    details of a crime <br /> that took place in
                                    their locality through a form.
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container_item">
                        <div className="content">
                            <h3 className="head">Take A Safe Route</h3>
                            <p className="parag">
                                <i>
                                    Our map will give the safest route to the
                                    user to reach the destiny <br /> by taking
                                    insight from the markers placed in the map.
                                </i>
                            </p>
                        </div>
                        <NavLink to="/fake">
                            <img className="item_img" src={route} alt="" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
