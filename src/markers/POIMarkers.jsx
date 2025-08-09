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
        subtext="The regional seat of power in Akhlo'Rohma for over two-thousand years, Ancehl Castle stands today as the lone surviving structure of what used to be a prominent city." 
        imageURL="https://wiki.drehmal.cyou/assets/img/poi/ancehl_castle.png"
        coords="(X: 1510, Y: 144, Z: -2012)"
      />
    )
  }, 
  {
    coords: [7763, 3956.5],
    popUp: (
      <PopupContent 
        name="The Foundry"
        link={ generatePOILink("Foundry") } 
        subtext="The Foundry served as the empire's center for arms manufacturing and combat training and is possibly the single most challenging combat encounter in the entirety of Drehmal." 
        imageURL="https://wiki.drehmal.cyou/assets/img/poi/foundry_bridge.png"
        coords="(X: -3276, Y: 157, Z: 1500)"
      />
    )
  }, 
];
