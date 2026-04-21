import PopupContent from "../PopUpContent";

// This file serves as a template for adding new markers. You can copy and paste the structure of
// the existing markers, and fill in the details as needed.
//
// Each marker category is a separate array of objects, where each object containing its
// coordinates and popup content component.
//
// After population, import the marker array into ../Markers.jsx, create an icon for the category
// to use (see the existing icons as reference, ideally a 512x512 png), and add a new entry to
// markerMap (line 31) with the category name, marker array, and icon. Example:
//
// import { exampleMarkers } from './ExampleMarkers';
// ...
// import exampleIconUrl from './assets/example-icon.png';
// ...
// const exampleIcon = new Icon({
//     iconUrl: exampleIconUrl,
//     iconSize: [20, 20],
//     iconAnchor: [10, 10], // this centers the icon
//     popupAnchor: [0, -10], // this makes the popup appear above the icon
// });
// ...
// export const markerMap = {
//     ...
//     "Example Category": {
//         markers: exampleMarkers,
//         icon: exampleIcon
//     }
// };
export const exampleMarkers = [
    {
        coords: [0, 0], // these are the coordinates on the image overlay. to obtain, note the
                        // latlong printed in the console on click (see function in App.jsx) 
                        // and copy paste in.
        popUp: <PopupContent 
            name="" // name the marker
            link="" // link to wiki page or other relevant page
            subtext="" // description of what the marker marks
            imageURL="" // image to show in the popup, can be a file path or online URL
            coords="(X: 0, Y: 0, Z: 0)" // coordinates to show in the popup
            />
    },
    // ... populate with more as needed
];
