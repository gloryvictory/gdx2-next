import "ol/ol.css";

import MVT from "ol/format/MVT";
import { Fill, Icon, Stroke, Style, Text } from "ol/style";



export const format = new MVT();
export const attributions =
  '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap contributors</a>';

  export const stroke = new Stroke({ color: "black", width: 2 });
  export const fill = new Fill({ color: "red" });
  // export const pointStyle = new Style({
  //   image: new RegularShape({
  //     fill,
  //     stroke,
  //     points: 4,
  //     radius: 10,
  //     angle: Math.PI / 4,
  //   }),
  // });
  export const polygonStyle = new Style({
    stroke: new Stroke({
      color: "red",
      width: 3,
    }),
    fill: new Fill({
      color: "rgba(0, 0, 255, 0.1)",
    }),
  });


  export const style = createMapboxStreetsV6Style(
    Style,
    Fill,
    Stroke,
    Icon,
    Text
  );

  function createMapboxStreetsV6Style(Style: typeof Style, Fill: typeof Fill, Stroke: typeof Stroke, Icon: typeof Icon, Text: typeof Text) {
    // throw new Error("Function not implemented.");
  }

  export default function STA() {

  return (
    <olLayerVectorTile declutter style={style}>
      <olSourceVectorTile
        attributions={attributions}
        format={format}
        url={`http://localhost:7800/gdx2.sta/{z}/{x}/{y}.pbf`}
      />
    </olLayerVectorTile>
    )

}


