import * as React from 'react';
import {useState, useEffect, useCallback, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import Map, {Source, Layer} from 'react-map-gl';
import axios from 'axios';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import DrawControl from './DrawControl';
import ControlPanel from './ControlPanel';

const TOKEN = 'pk.eyJ1IjoibWJ5cm5lNTEwIiwiYSI6ImNsNDQ3MDYxODA5a2wza3A3NTdydmp1bG0ifQ.FEbWBlXPfSgUt-Aibs5bUg';
mapboxgl.accessToken = TOKEN;

// export default function Mapper() {
//   const [features, setFeatures] = useState({
//     "54f8d1156c2121253e9ab45536d77c04": {
//       geometry: {
//         coordinates: [[
//           [-119.77685759635801, 34.462498181087454],
//           [-119.72452904801142, 34.43558179225437], 
//           [-119.72452904801142, 34.45865351376406],
//           [-119.77685759635801, 34.462498181087454]
//         ]],
//         type: "Polygon"
//       },
//       type: "Feature",
//       properties: {},
//       id: "54f8d1156c2121253e9ab45536d77c04"
//     }
//   });

//   // useEffect(() => {
//   //   const getTrashPolygons = async () => {
//   //     const results = await axios('http://localhost:8080/api/trash');
//   //     setFeatures(results.data);
//   //   };
//   //   getTrashPolygons();
//   // }, []);

//   const onUpdate = useCallback(e => {
//     setFeatures(currFeatures => {
//       const newFeatures = {...currFeatures};
//       for (const f of e.features) {
//         newFeatures[f.id] = f;
//       }
//       return newFeatures;
//     });
//   }, []);

//   const onDelete = useCallback(e => {
//     setFeatures(currFeatures => {
//       const newFeatures = {...currFeatures};
//       for (const f of e.features) {
//         delete newFeatures[f.id];
//       }
//       return newFeatures;
//     });
//   }, []);

//   console.log(features);

//   return <>
//     <Map
//       initialViewState={{
//         longitude: -91.874,
//         latitude: 42.76,
//         zoom: 12
//       }}
//       mapStyle="mapbox://styles/mapbox/satellite-v9"
//       mapboxAccessToken={TOKEN}
//     >
//       {/* <Source type="geojson" data={features}/> */}
//       <DrawControl
//         features={features}
//         position="top-left"
//         displayControlsDefault={false}
//         controls={{
//           polygon: true,
//           trash: true
//         }}
//         defaultMode="draw_polygon"
//         onCreate={onUpdate}
//         onUpdate={onUpdate}
//         onDelete={onDelete}
//       />
//     </Map>
//     {/* <ControlPanel polygons={Object.values(features)} /> */}
//   </>;
// }

export default function Mapper() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-119.730464);
  const [lat, setLat] = useState(34.44206);
  const [zoom, setZoom] = useState(14);

  const [features, setFeatures] = useState({});

  useEffect(() => {
    const getTrashPolygons = async () => {
      const results = await axios('http://localhost:8080/api/trash');
      setFeatures(results.data);
    };
    getTrashPolygons();
  }, []);

  const onUpdate = (e) => {
    setFeatures(currFeatures => {
      const newFeatures = {...currFeatures};
      for (const f of e.features) {
        newFeatures[f.id] = f;
      }
      return newFeatures;
    });
  }
  
  const onDelete = useCallback(e => {
    setFeatures(currFeatures => {
      const newFeatures = {...currFeatures};
      for (const f of e.features) {
        delete newFeatures[f.id];
      }
      return newFeatures;
    });
  }, []);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [lng, lat],
      zoom: zoom
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      },
      defaultMode: 'draw_polygon'
    });
  
    map.current.addControl(draw);

    map.current.on('draw.create', onUpdate);
    map.current.on('draw.delete', onDelete);
    map.current.on('draw.update', onUpdate);

    const getTrashPolygons = async () => {
      const results = await axios('http://localhost:8080/api/trash');
      setFeatures(results.data);

      for (const id in features) {
        draw.add(
          // geometry: {
          //   coordinates: [[
          //     [-119.82752090675238, 34.525661676877036],
          //     [-119.74431735621165, 34.43163005740054], 
          //     [-119.7107675374451, 34.49912231061455],
          //     [-119.82752090675238, 34.525661676877036]
          //   ]],
          //   type: "Polygon"
          // },
          // type: "Feature",
          // properties: {},
          // id: "54f8d1156c2121253e9ab45536d77c04"
          features[id]
        );    
      }
    };
    getTrashPolygons();
  });

  return (
    <div
      ref={mapContainer}
      className="map-container"
      style={{height: "650px"}} />
  );
}

// export function renderToDom(container) {
//   createRoot(container).render(<App />);
// }