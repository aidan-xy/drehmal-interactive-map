import './Sidebar.css';
import logo from './assets/drehmal_text_logo.png';
import * as React from 'react';
import Markers from './Markers';

const initialShownMarkers = [
    { show: true, name: "Terminus Towers" },
    { show: true, name: "Legendary Items" },
    { show: true, name: "Points of Interest" },
];

function Sidebar() {
    const [shownMarkersState, setShownMarkersState] = React.useState(initialShownMarkers);

    function handleShownMarkersChange(index) {
        const newState = shownMarkersState.map((marker, i) =>
            i === index ? { ...marker, show: !marker.show } : marker
        );
        setShownMarkersState(newState);
    }

    function Checkbox({ label, i }) {
        return (
            <>
                <input
                    className="checkbox"
                    type="checkbox"
                    id={ label }
                    onChange={ () => handleShownMarkersChange(i) }
                    checked={ shownMarkersState[i].show }
                />
                <label className="label" htmlFor={label}>{label}</label>
            </>
        );
    }

    return (
        <>
            <div className="sidebar">
                <div className="logo-container">
                    <img className="logo" src={logo} />
                    <h2 style={{ textAlign: "center" }}>Interactive Map</h2>
                </div>
                <fieldset>
                    <legend>Filter:</legend>
                    {shownMarkersState.map((marker, i) => (
                        <div key={i}>
                            <Checkbox label={marker.name} i={i} />
                        </div>
                    ))}
                </fieldset>
            </div>
            <Markers shownMarkers={ shownMarkersState } />
        </>
    );
}

export default Sidebar;