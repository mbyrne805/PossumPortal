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

export default function Mapper() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-119.730464);
  const [lat, setLat] = useState(34.44206);
  const [zoom, setZoom] = useState(14);
  const [features, setFeatures] = useState(null);

  //maybe just convert it to Trash here
  const onUpdate = (e) => {
    for (const f of e.features) {
      axios.post('http://localhost:8080/api/trash', {
        id: f.id,
        type: "Feature",
        properties: {severity: "Heavy"},
        geometry: {coordinates: f.geometry.coordinates, type: "Polygon"}
      });
    }

    setFeatures(currFeatures => {
      const newFeatures = {...currFeatures};
      for (const f of e.features) {
        newFeatures[f.id] = f;
      }
      return newFeatures;
    });
  }
  
  const onDelete = (e) => {
    setFeatures(currFeatures => {
      const newFeatures = {...currFeatures};
      for (const f of e.features) {
        delete newFeatures[f.id];
      }
      return newFeatures;
    });
  };

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
      console.log(results);
      for (let id in results.data) {
        console.log(results.data[id]);
        draw.add(results.data[id]);
      }

      setFeatures(results.data);

      //https://stackoverflow.com/questions/60085087/add-onclick-to-a-mapbox-marker-element
    };
    getTrashPolygons();
  });

  // useEffect(() => {
  //   const draw = new MapboxDraw({
  //     displayControlsDefault: false,
  //     controls: {
  //       polygon: true,
  //       trash: true
  //     },
  //     defaultMode: 'draw_polygon'
  //   });
  
  //   map.current.addControl(draw);

  //   map.current.on('draw.create', onUpdate);
  //   map.current.on('draw.delete', onDelete);
  //   map.current.on('draw.update', onUpdate);

  //   console.log(features);

  //   for (const id in features) {
  //     console.log('test');
  //     draw.add(
  //       { type: 'Point', coordinates: [0, 0] }      );    
  //   }
  // });
  
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