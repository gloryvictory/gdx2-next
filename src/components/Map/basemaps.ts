import { MaplibreStyleDefinition, MaplibreStyleSwitcherOptions, TargetProps } from "maplibre-gl-style-switcher";

const tp:TargetProps = {
  layer: 0,
  name: "background",
  source: 0,
  type: "style",

}   

export const basemaps_styles: MaplibreStyleDefinition[] = [
  { 
      title: "Dark",
      uri:"https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      properties: {},
      targetProps: tp,
      activeImageScr: null,
      imageSrc: null,
  },
  {
      title: "Light",
      uri:"https://tiles.basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      properties: {},
      targetProps: tp,
      activeImageScr: null,
      imageSrc: null,
  },
  {
      title: "VOYAGER",
      uri:"	https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      properties: {},
      targetProps: tp,
      activeImageScr: null,
      imageSrc: null,
  },
  
];


export const basemaps_options: MaplibreStyleSwitcherOptions = {
  defaultStyle: "Light",
  showTitle: true,
  eventListeners: {
// return true if you want to stop execution
//           onOpen: (event: MouseEvent) => boolean;
//           onSelect: (event: MouseEvent) => boolean;
//           onChange: (event: MouseEvent, style: string) => boolean;
  }
};

export const LIGHT_MAP_STYLE = 'https://tiles.basemaps.cartocdn.com/gl/positron-gl-style/style.json';
export const DARK_MAP_STYLE = 'https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';


// osm: {
//   type: "raster",
//   tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
//   tileSize: 256,
//   attribution: "&copy; OpenStreetMap Contributors",
//   maxzoom: 19
// },
// terrain: {
//   type: "raster-dem",
//   url:
//     "https://api.maptiler.com/tiles/terrain-rgb/tiles.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
//   tileSize: 256
// }
