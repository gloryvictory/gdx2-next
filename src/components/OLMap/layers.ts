import TileLayer from "ol/layer/Tile";
import { OSM, VectorTile, OGCVectorTile } from "ol/source";
import  MVT  from "ol/format/MVT";
import VectorTileLayer, { Options } from "ol/layer/VectorTile";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { createXYZ } from "ol/tilegrid";
import RenderFeature from "ol/render/Feature";

// import OGCVectorTile from 'ol/source/OGCVectorTile.js';
// import VectorTileLayer from 'ol/layer/VectorTile.js';

export const osm = new TileLayer({
  source: new OSM(),
})

// // export const sta_layer = new VectorTile({
// //   source: new VectorTile({
// //       attributions: '© vzam contributors</a>',
// //       format: new MVT(),
// //       // tileGrid: tilegrid,
// //       // tilePixelRatio: 8,
// //       url: 'http://localhost:7800/gdx2.sta/{z}/{x}/{y}.pbf'
// //   })
// //   });

// export const sta_layer = new VectorTileLayer({
//     source: new OGCVectorTile({
//       url: 'http://localhost:7800/gdx2.sta/{z}/{x}/{y}.pbf',
//       format: new MVT(),
//     }),
//     // background: '#e2e3e3',
//     // style: {

//     //   // 'stroke-width': 1,
//     //   // 'stroke-color': '#8c8b8b',
//     //   // 'fill-color': '#f7f7e9',
//     // },
//   })

// //   // Define a VectorTile source
// //   export const vectorTileSource = new VectorTile({
// //   format: new MVT(),
// //   url: 'http://localhost:7800/gdx2.sta/{z}/{x}/{y}.pbf'
// // });

// // // Define a VectorTile layer
// // export const vectorTileLayer = new VectorTile({
// //   source: vectorTileSource,
// //   style: new Style({
// //       fill: new Fill({
// //           color: 'rgba(0, 0, 255, 0.1)'
// //       }),
// //       stroke: new Stroke({
// //           color: '#11b',
// //           width: 2
// //       })
// //   })
// // });

// var style_simple = new Style({
//   fill: new Fill({
//       color: '#ADD8E6'
//   }),
//   stroke: new ol.style.Stroke({
//       color: '#880000',
//       width: 5
//   })
// });

// const rf: Options = {
//   source: new VectorTile({
//     // tilePixelRatio: 1, // oversampling when > 1
//     tileGrid: createXYZ({ maxZoom: 19 }),
//     format: new MVT(),
//     url: 'http://localhost:7800/gdx2.sta/{z}/{x}/{y}.pbf'
// }),
//   minZoom: 0,
//   maxZoom: 18
// }


// let vectortile_layer = new VectorTile(rf)  ;
