import { useEffect, useRef } from 'react';

import { Map } from "@react-ol/fiber";
import "ol/ol.css";
import STA from './sta';

// import MVT from "ol/format/MVT";
// import { Fill, Icon, Stroke, Style, Text } from "ol/style";
// import { osm, vectortile_layer } from './layers';
// import { ol_view } from './views';
// import { style } from './sta';



export default function OL_Map() {
  
  const map1Container = useRef();

  // on component mount create the map and set the map refrences to the state
  // useEffect(() => {
  //   const map1 = new Map({
  //     layers: [osm , vectortile_layer ],
  //     view: ol_view,
  //     target: map1Container.current,
  //   });

    // map1.setTarget(map1Container.current);
    // setMap1Object(map1);

    // on component unmount remove the map refrences to avoid unexpected behaviour
  //   return () => {
  //     // map1.setTarget(undefined);
  //     // setMap1Object(null);
  //   };
  // }, []);

  // className="rounded-xl overflow-hidden mt-4 bg-white"
  // className="map mt-20 lg:w-auto lg:h-auto h-full w-screen"
  // initialCenter={[8546575.886939, 2137169.681579]}
  const mystyle = { width: "100%", height: "1000px"}
  return (
  
    // <div id="map" ref={map1Container} className="map mt-20 h-full w-screen">
      <Map className="map mt-20 h-full w-screen rounded-xl" style={mystyle}>
          <olView  initialCenter={[ 9709968, 9709968]} initialZoom={4} />
          <olLayerTile>
            <olSourceOSM />
          </olLayerTile>    
        <STA/>          
      </Map>

    // </div>
  );
}

