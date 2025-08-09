import PopupContent from "../PopUpContent";

function generatePOILink(name) {
  return `https://wiki.drehmal.cyou/World/Points_of_Interest/${name.replace(/ /g, "_")}/`;
}

export const poiMarkers = [
  {
    coords: [11274, 8754],
    popUp: (
      <PopupContent 
        name="Ancehl Castle"
        link={ generatePOILink("Ancehl Castle") } 
        subtext="Placeholder subtext" 
        imageURL="#"
        coords="(X: 0, Y: 0, Z: 0)"
      />
    )
  }, 
  {
    coords: [7763, 3956.5],
    popUp: (
      <PopupContent 
        name="The Foundry"
        link={ generatePOILink("Foundry") } 
        subtext="Placeholder subtext" 
        imageURL="#"
        coords="(X: 0, Y: 0, Z: 0)"
      />
    )
  }, 
];
