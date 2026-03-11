import PopupContent from "../PopUpContent";

// could break in the future
function generatePOILink(name) {
  return `https://wiki.drehmal.cyou/World/Points_of_Interest/${name.replace(/ /g, "_")}/`;
}

export const poiMarkers = [
  {
    coords: [10828, 11373],
    popUp: (
      <PopupContent 
        name="Altar of Insight"
        link={ generatePOILink("Altar of Insight") } 
        subtext="The Altar of Insight was an ancient, stone ziggurat by the Tinaxi Pools that contained unique Veruhktian technology and served as an important religious site."
        imageURL="https://wiki.drehmal.cyou/assets/img/poi/altar_of_insight.png"
        coords="(X: 4116, Y: 122, Z: -1547)"
      />
    )
  },
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
    coords: [7636, 7016.5],
    popUp: (
      <PopupContent 
        name="Av'Sal"
        link={ generatePOILink("Av'Sal") } 
        subtext="Av'Sal is the ruined capital city of the Avsohmic Empire, located in southwestern Dreh'Noha near the northern edge of Palisades Heath. Av'Sal is among the largest ruins in the map, if not the largest."
        imageURL="https://wiki.drehmal.cyou/assets/img/poi/avsal.png"
        coords="(X: -218, Y: 105, Z: 1645)"
      />
    )
  },
  {
    coords: [0, 0],
    popUp: (
      <PopupContent 
        name=""
        link={ generatePOILink("") } 
        subtext=""
        imageURL=""
        coords=""
      />
    )
  },
  {
    coords: [0, 0],
    popUp: (
      <PopupContent 
        name=""
        link={ generatePOILink("") } 
        subtext=""
        imageURL=""
        coords=""
      />
    )
  },
  {
    coords: [0, 0],
    popUp: (
      <PopupContent 
        name=""
        link={ generatePOILink("") } 
        subtext=""
        imageURL=""
        coords=""
      />
    )
  },
  {
    coords: [0, 0],
    popUp: (
      <PopupContent 
        name=""
        link={ generatePOILink("") } 
        subtext=""
        imageURL=""
        coords=""
      />
    )
  },
  {
    coords: [0, 0],
    popUp: (
      <PopupContent 
        name=""
        link={ generatePOILink("") } 
        subtext=""
        imageURL=""
        coords=""
      />
    )
  },
  {
    coords: [0, 0],
    popUp: (
      <PopupContent 
        name=""
        link={ generatePOILink("") } 
        subtext=""
        imageURL=""
        coords=""
      />
    )
  },
  {
    coords: [0, 0],
    popUp: (
      <PopupContent 
        name=""
        link={ generatePOILink("") } 
        subtext=""
        imageURL=""
        coords=""
      />
    )
  },
  {
    coords: [0, 0],
    popUp: (
      <PopupContent 
        name=""
        link={ generatePOILink("") } 
        subtext=""
        imageURL=""
        coords=""
      />
    )
  },
  {
    coords: [0, 0],
    popUp: (
      <PopupContent 
        name=""
        link={ generatePOILink("") } 
        subtext=""
        imageURL=""
        coords=""
      />
    )
  },
  {
    coords: [0, 0],
    popUp: (
      <PopupContent 
        name=""
        link={ generatePOILink("") } 
        subtext=""
        imageURL=""
        coords=""
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
  {
    coords: [0, 0],
    popUp: (
      <PopupContent 
        name=""
        link={ generatePOILink("") } 
        subtext=""
        imageURL=""
        coords=""
      />
    )
  },

];
