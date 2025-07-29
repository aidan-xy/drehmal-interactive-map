import { Marker, Popup } from 'react-leaflet';
import { legendaryMarkers } from './markers/LegendaryMarkers';
import { poiMarkers } from './markers/POIMarkers';
import { terminusMarkers } from './markers/TerminusMarkers';

function Markers({ shownMarkers }) {
    const allMarkersArrays = [terminusMarkers, legendaryMarkers, poiMarkers];

    let markers = [];
    for (let i = 0; i < shownMarkers.length; i++) {
        if (shownMarkers[i].show) {
            markers = markers.concat(allMarkersArrays[i]);
        }
    }

    return (
        <>
            {markers.map((marker, index) => (
                <Marker key={index} position={marker.coords}>
                    <Popup>{marker.popUp}</Popup>
                </Marker>
            ))}
        </>
    );
}

export default Markers;