

import React, { useState } from "react";
import { useEffect } from "react";

const Search = () => {
    function getValue() {
        let txt = document.getElementById("txt").value;
        setSearch(txt);
        //  console.log(txt);
    }
    const [search, setSearch] = useState("");
    const [mapboxid, setid] = useState("");
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

            const deslat = data["features"][0]["geometry"]["coordinates"][1];
            const deslon = data["features"][0]["geometry"]["coordinates"][1];
            console.log(deslat);

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
        <div className="SearchBar">
            <input id="txt" onInput={getValue} placeholder="hi" />
            <button onClick={() => searchApiId()}>Go</button>
        </div>
    );
};

export default Search;
