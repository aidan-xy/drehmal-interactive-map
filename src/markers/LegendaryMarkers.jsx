import PopupContent from "../PopUpContent";
import avpodImg from '../assets/legendary-images/avpod.png';

export const legendaryMarkers = [
    {
        coords: [5704, 5118],
        popUp: <PopupContent 
                  name="AvPOD" 
                  link="https://wiki.drehmal.cyou/Items/Legendary_Items/AvPOD/"
                  subtext="The AvPOD (short for Avsohmic Playback Organizer Device) is a legendary item that is capable of playing any individual song from the OST, as long as the player has heard it at some point."
                  imageURL={ avpodImg } // trimmed png
                  coords="(X: -2113, Y: 119, Z: 3582)"
            />
    }, 
  ];