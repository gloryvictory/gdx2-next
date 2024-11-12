import { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import { osm } from './layers';
import { ol_view } from './views';
import 'ol/ol.css';



export default function OL_Map() {
  
  const map1Container = useRef();

  // on component mount create the map and set the map refrences to the state
  useEffect(() => {
    const map1 = new Map({
      layers: [osm  ],
      view: ol_view,
    });

    map1.setTarget(map1Container.current);
    // setMap1Object(map1);

    // on component unmount remove the map refrences to avoid unexpected behaviour
    return () => {
      map1.setTarget(undefined);
      // setMap1Object(null);
    };
  }, []);


  return (
  
    <div id="map" ref={map1Container} className="map mt-20 lg:w-auto lg:h-auto h-full w-screen">


    </div>
  );
}
