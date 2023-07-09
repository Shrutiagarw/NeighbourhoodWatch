import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import circle1 from "../images/redcircle.png";
import circle2 from "../images/browncircle.png";
import Nav from "../Components/Nav";
import Map, { Marker } from "react-map-gl";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import home from "../images/home.png";

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
        77.446183, 28.37585762735543, 75.37585762735543, 72.37585762735543,
        65.37585762735543, 43.37585762735543, 62.37585762735543,
        82.37585762735543, 68.37585762735543,
    ];
    const lat = [
        28.633976, 22.45677614934833, 23.37585762735543, 33.37585762735543,
        25.37585762735543, 29.45677614934833, 33.37222762735543,
        23.37582222735543, 27.37585762735543,
    ];
    const crimes = [10, 95, 25, 122, 136, 73, 47];

    function getValue() {
        let txt = document.getElementById("txt").value;
        setSearch(txt);
        //  console.log(txt);
    }
    const [search, setSearch] = useState("");
    const [mapboxid, setid] = useState("");
    const [homelon, setlon] = useState("");
    const [homelat, setlat] = useState("");
    const accesstoken =
        "pk.eyJ1IjoiYW5rdXIwNDAzIiwiYSI6ImNsNGN0cmI1djAwOTAzaXE3aGNiMmI3dTMifQ.rclXihRRR55Qs0iJ7a58Rg";

    const searchApiId = async () => {
        try {
            console.log(search);
            let API = ` https://api.mapbox.com/search/searchbox/v1/suggest?q=${search}&access_token=pk.eyJ1IjoiYW5rdXIwNDAzIiwiYSI6ImNsNGN0cmI1djAwOTAzaXE3aGNiMmI3dTMifQ.rclXihRRR55Qs0iJ7a58Rg&session_token=377ac4e7-9275-46cf-9166-134da35172f3&language=en&limit=10&types=country%2Cregion%2Cdistrict%2Cpostcode%2Clocality%2Cplace%2Cneighborhood%2Caddress%2Cpoi%2Cstreet%2Ccategory&proximity=-98%2C%2040`;
            const res = await fetch(API);
            const data = await res.json();
            console.log(data);
            const mapid = data["suggestions"][1]["mapbox_id"];
            console.log(mapid);
            cordinateAPI(mapid);
        } catch (error) {}
    };
    const cordinateAPI = async (mapid) => {
        try {
            console.log(mapid);
            let API2 = `https://api.mapbox.com/search/searchbox/v1/retrieve/${mapid}?session_token=377ac4e7-9275-46cf-9166-134da35172f3&access_token=pk.eyJ1IjoiYW5rdXIwNDAzIiwiYSI6ImNsNGN0cmI1djAwOTAzaXE3aGNiMmI3dTMifQ.rclXihRRR55Qs0iJ7a58Rg`;
            const res = await fetch(API2);
            const data = await res.json();
            // console.log(data);
            const x = data["features"][0]["geometry"]["coordinates"][1];
            const y = data["features"][0]["geometry"]["coordinates"][0];
            const deslat = setlat(
                data["features"][0]["geometry"]["coordinates"][1]
            );
            const deslon = setlon(
                data["features"][0]["geometry"]["coordinates"][0]
            );
            console.log(x);
            console.log(y);

            // const longitude = coordinates[0];
            // const latitude = coordinates[1];

            // console.log(longitude);
            const lat = deslat;
            // console.log(latitude);
        } catch (error) {}
    };

    // useEffect(() => {
    //     fetchApiData(API);
    //     //fetchApiData(API2);
    // }, []);

    return (
        <div>
            <Nav />
            <input
                id="txt"
                onInput={getValue}
                placeholder="where you want to buy?"
            />
            <button id="go" onClick={() => searchApiId()}>
                Go
            </button>
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
                                    <td>Snatching</td>
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
                    longitude={homelon}
                    latitude={homelat}
                >
                    {crimes[5] < 50 ? (
                        <div>
                            <img
                                className="home"
                                src={home}
                                alt=""
                                srcset=""
                                onClick={handleClick}
                            />
                        </div>
                    ) : (
                        <img
                            className="home"
                            src={home}
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
