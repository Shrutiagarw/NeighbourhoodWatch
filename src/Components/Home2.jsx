import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import circle1 from "../images/redcircle.png";
import circle2 from "../images/browncircle.png";
import Nav from "../Components/Nav";
import Map, { Marker } from "react-map-gl";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 10000); // Hide the popup after 3 seconds
    };

    const circle = [circle1, circle2];
    const lng = [
        78.37585762735543, 75.37585762735543, 72.37585762735543,
        65.37585762735543, 73.37585762735543, 62.37585762735543,
        82.37585762735543, 68.37585762735543,
    ];
    const lat = [
        22.45677614934833, 23.37585762735543, 33.37585762735543,
        25.37585762735543, 29.45677614934833, 33.37222762735543,
        23.37582222735543, 27.37585762735543,
    ];
    const crimes = [10, 95, 25, 122, 136, 73, 47];
    return (
        <div>
            <Nav />
            {showPopup && (
                <div className="popup">
                    <div className="box">
                        <h1 className="popup_detail">
                            <table border="1">
                                <tr>
                                    <td>Criminal activities</td>
                                    <td>Numbers</td>
                                </tr>
                                <tr>
                                    <td>Death</td>
                                    <td>34</td>
                                </tr>
                                <tr>
                                    <td>Criminal</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>Robbery</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Kidnapping</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <NavLink
                                            className="navbar__item"
                                            to="/criminals"
                                        >
                                            Details...
                                        </NavLink>
                                    </td>
                                </tr>
                            </table>
                        </h1>
                    </div>
                </div>
            )}
            <Map
                mapboxAccessToken="pk.eyJ1IjoiYW5rdXIwNDAzIiwiYSI6ImNsNGN0cmI1djAwOTAzaXE3aGNiMmI3dTMifQ.rclXihRRR55Qs0iJ7a58Rg"
                style={{
                    width: "100%",
                    height: "831px",
                    borderRadius: "5px",

                    zoom: 1,
                    center: [0, 20],
                }}
                initialViewState={{
                    longitude: 78.37585762735543,
                    latitude: 22.45677614934833,
                }}
                mapStyle="mapbox://styles/mapbox/dark-v10" //streets-v9
            >
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[0]}
                    latitude={lat[0]}
                >
                    {crimes[5] < 50 ? (
                        <div>
                            <img
                                className="circle"
                                src={circle[1]}
                                alt=""
                                srcset=""
                                onClick={handleClick}
                            />
                        </div>
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[1]}
                    latitude={lat[0]}
                >
                    {crimes[1] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}

                    <img className="circle" src={circle[0]} alt="" />
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[0]}
                    latitude={lat[1]}
                >
                    {crimes[2] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[1]}
                    latitude={lat[1]}
                >
                    {crimes[3] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[2]}
                    latitude={lat[2]}
                >
                    {crimes[4] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[3]}
                    latitude={lat[3]}
                >
                    {crimes[2] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>

                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[0]}
                    latitude={lat[0]}
                >
                    {crimes[5] < 50 ? (
                        <div>
                            <img
                                className="circle"
                                src={circle[1]}
                                alt=""
                                srcset=""
                                onClick={handleClick}
                            />
                        </div>
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[1]}
                    latitude={lat[0]}
                >
                    {crimes[1] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}

                    <img className="circle" src={circle[0]} alt="" />
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[0]}
                    latitude={lat[1]}
                >
                    {crimes[2] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[1]}
                    latitude={lat[1]}
                >
                    {crimes[3] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[2]}
                    latitude={lat[2]}
                >
                    {crimes[4] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[3]}
                    latitude={lat[3]}
                >
                    {crimes[2] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[4]}
                    latitude={lat[4]}
                >
                    {crimes[5] < 50 ? (
                        <div>
                            <img
                                className="circle"
                                src={circle[1]}
                                alt=""
                                srcset=""
                                onClick={handleClick}
                            />
                        </div>
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[5]}
                    latitude={lat[4]}
                >
                    {crimes[1] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}

                    <img className="circle" src={circle[0]} alt="" />
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[6]}
                    latitude={lat[5]}
                >
                    {crimes[2] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[6]}
                    latitude={lat[6]}
                >
                    {crimes[3] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[7]}
                    latitude={lat[1]}
                >
                    {crimes[4] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
                <Marker
                    draggable={false}
                    color={"red"}
                    longitude={lng[7]}
                    latitude={lat[3]}
                >
                    {crimes[2] < 50 ? (
                        <img
                            className="circle"
                            src={circle[1]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    ) : (
                        <img
                            className="circle"
                            src={circle[0]}
                            alt=""
                            srcset=""
                            onClick={handleClick}
                        />
                    )}
                </Marker>
            </Map>
        </div>
    );
}

export default Home;
