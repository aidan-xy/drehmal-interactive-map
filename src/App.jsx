import 'leaflet/dist/leaflet.css';
import './App.css';
import { MapContainer, ImageOverlay, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import Sidebar from './Sidebar';

const imageUrl = '../drehmal-full-map.png';
const imageWidth = 16000;
const imageHeight = 16000;
const bounds = [[0, 0], [imageHeight, imageWidth]];

// logs latlong in easy to copy format on click
function OnMapClick() {
  useMapEvent('click', (e) => {
    console.log("[" + e.latlng.lat + ", " + e.latlng.lng + "]");
  });
  return null;
}

function App() {
  return (
    <div>
      <MapContainer
        className="map-container"
        center={[imageHeight / 2, imageWidth / 2]}
        crs={L.CRS.Simple}
        bounds={bounds}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        minZoom={-3}
        maxZoom={1}
        zoom={-3}
      > 
        <Sidebar />        
        <ImageOverlay url={imageUrl} bounds={bounds} />
        <OnMapClick />
      </MapContainer>
    </div>
  );
}

export default App;