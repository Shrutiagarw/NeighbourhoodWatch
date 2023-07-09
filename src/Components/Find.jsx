import React, { useState } from "react";
import ReactMapGL, { GeolocateControl, Marker, Popup } from "react-map-gl";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYW5rdXIwNDAzIiwiYSI6ImNsNGN0cmI1djAwOTAzaXE3aGNiMmI3dTMifQ.rclXihRRR55Qs0iJ7a58Rg";

const MapWithSearch = () => {
    const [viewport, setViewport] = useState({
        latitude: 72,
        longitude: 22,
        zoom: 1,
    });
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${mapboxgl.accessToken}`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch search results");
            }

            const data = await response.json();
            setSearchResults(data.features);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setViewport({
            latitude: location.center[1],
            longitude: location.center[0],
            zoom: 1,
        });
    };

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder="Search for a location"
                />
                <button type="submit">Search</button>
            </form>
            <ReactMapGL
                {...viewport}
                width="100%"
                height="400px"
                onViewportChange={setViewport}
                mapboxApiAccessToken={mapboxgl.accessToken}
            >
                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
                {searchResults.map((location) => (
                    <Marker
                        key={location.id}
                        latitude={location.center[1]}
                        longitude={location.center[0]}
                    >
                        <button
                            className="marker-btn"
                            onClick={() => handleLocationSelect(location)}
                        >
                            <img src="marker.svg" alt="Location Marker" />
                        </button>
                    </Marker>
                ))}
                {selectedLocation && (
                    <Popup
                        latitude={selectedLocation.center[1]}
                        longitude={selectedLocation.center[0]}
                        onClose={() => setSelectedLocation(null)}
                    >
                        <div>
                            <h3>{selectedLocation.text}</h3>
                            <p>{selectedLocation.place_name}</p>
                        </div>
                    </Popup>
                )}
            </ReactMapGL>
        </div>
    );
};

export default MapWithSearch;
