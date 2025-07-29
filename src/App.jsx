import 'leaflet/dist/leaflet.css';
import './App.css';
import { MapContainer, ImageOverlay, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import Sidebar from './Sidebar';

const imageUrl = '../drehmal-full-map.png';
const imageWidth = 12800;
const imageHeight = 12800;
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
        minZoom={-4}
        maxZoom={1}
        zoom={-4}
      > 
        <Sidebar />        
        <ImageOverlay url={imageUrl} bounds={bounds} />
        <OnMapClick />
      </MapContainer>
    </div>
  );
}

export default App;