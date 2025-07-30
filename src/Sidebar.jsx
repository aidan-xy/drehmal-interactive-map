import './Sidebar.css';
import logo from './assets/drehmal_text_logo.png';
import * as React from 'react';
import Markers, { markerMap } from './Markers';

const initialShownMarkers = Object.fromEntries(
    Object.keys(markerMap).map(name => [name, true])
);

function Sidebar() {
    const [shownMarkersState, setShownMarkersState] = React.useState(initialShownMarkers);

    function handleShownMarkersChange(name) {
        setShownMarkersState(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    }

    function Checkbox({ label }) {
        return (
            <>
                <input
                    className="checkbox"
                    type="checkbox"
                    id={label}
                    onChange={() => handleShownMarkersChange(label)}
                    checked={shownMarkersState[label]}
                />
                <label className="label" htmlFor={label}>{label}</label>
            </>
        );
    }

    return (
        <>
            <div className="sidebar">
                <div className="logo-container">
                    <a href="https://www.drehmal.net/">
                        <img className="logo" src={logo} target="_blank" />
                    </a>
                    <h2 className="logo-text" style={{ textAlign: "center" }}>Interactive Map</h2>                    
                </div>
                <fieldset>
                    <legend>Filter:</legend>
                    {Object.keys(shownMarkersState).map(name => (
                        <div key={name}>
                            <Checkbox label={name} />
                        </div>
                    ))}
                </fieldset>
            </div>
            <Markers shownMarkers={shownMarkersState} />
        </>
    );
}

export default Sidebar;
