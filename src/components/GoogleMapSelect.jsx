// GoogleMapSelect.jsx
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '300px',
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

export default function GoogleMapSelect({ onSelectLocation }) {
    const [location, setLocation] = useState(center);

    const handleMapClick = (e) => {
        const selectedLocation = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        };
        setLocation(selectedLocation);
        onSelectLocation(`${selectedLocation.lat}, ${selectedLocation.lng}`);
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyAH2vYVrCncE7KZQNXLiGaVyfmbol02Z_U">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
                onClick={handleMapClick}
            >
                <Marker position={location} />
            </GoogleMap>
        </LoadScript>
    );
}
