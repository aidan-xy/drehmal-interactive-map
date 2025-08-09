import { Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";

import { legendaryMarkers } from './markers/LegendaryMarkers';
import { poiMarkers } from './markers/POIMarkers';
import { terminusMarkers } from './markers/TerminusMarkers';

import terminusIconUrl from './assets/white_circle.png';
import legendaryIconUrl from './assets/purple_circle.png';
import poiIconUrl from './assets/pink_circle.png';

const terminusIcon = new Icon({
    iconUrl: terminusIconUrl,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
});
const legendaryIcon = new Icon({
    iconUrl: legendaryIconUrl,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
});
const poiIcon = new Icon({
    iconUrl: poiIconUrl,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
});

export const markerMap = {
    "Terminus Towers": {
        markers: terminusMarkers,
        icon: terminusIcon
    },
    "Legendary Items": {
        markers: legendaryMarkers,
        icon: legendaryIcon
    },
    "Points of Interest": {
        markers: poiMarkers,
        icon: poiIcon
    }
};

function Markers({ shownMarkers }) {
    let markers = [];

    for (const [category, isShown] of Object.entries(shownMarkers)) {
        if (isShown && markerMap[category]) {
            const { markers: groupMarkers, icon } = markerMap[category];
            markers = markers.concat(
                groupMarkers.map(m => ({ ...m, icon }))
            );
        }
    }

    return (
        <>
            {markers.map((marker, index) => (
                <Marker 
                    key={index} 
                    position={marker.coords} 
                    icon={marker.icon}                    
                >
                    <Popup>{marker.popUp}</Popup>
                </Marker>
            ))}
        </>
    );
}

export default Markers;