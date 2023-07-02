import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import Map, {Source, Layer} from 'react-map-gl';
import axios from 'axios';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import DrawControl from './DrawControl';
import ControlPanel from './ControlPanel';
import MapboxStyle from './style/DrawStyle';
import {centroid, polygon} from '@turf/turf';

//https://docs.mapbox.com/mapbox-gl-js/example/geojson-polygon/
//need to correctly add fill layer for mapbox-gl-draw-hot/cold polygons to enable mouseenter/leave events

const TOKEN = 'pk.eyJ1IjoibWJ5cm5lNTEwIiwiYSI6ImNsNDQ3MDYxODA5a2wza3A3NTdydmp1bG0ifQ.FEbWBlXPfSgUt-Aibs5bUg';
mapboxgl.accessToken = TOKEN;

export default function Mapper(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-110.730464);
  const [lat, setLat] = useState(32.44206);
  const [zoom, setZoom] = useState(14);
  const [polygonFeatures, setPolygonFeatures] = useState(null);
  const category = useRef(null);

  useEffect(() => {
    category.current = props.category;
  });

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [lng, lat],
      zoom: zoom
    });

    const draw = new MapboxDraw({
      userProperties: true,
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      },
      defaultMode: 'draw_polygon',
      styles: MapboxStyle.styles
    });
  
    map.current.addControl(draw);

    function changeColor(featureId) {
      switch(category.current) {
        case "trash":
          draw.setFeatureProperty(featureId, 'portColor', '#880808');
          break;
        case "ecology":
          draw.setFeatureProperty(featureId, 'portColor', '#00FF00');
          break;
        case "restoration":
          draw.setFeatureProperty(featureId, 'portColor', '#00FF00');
          break;  
        case "fire":
          draw.setFeatureProperty(featureId, 'portColor', '#00FF00');
          break;
        case "custom":
          draw.setFeatureProperty(featureId, 'portColor', '#A020F0');
          break;
      }
    }

    const onCreate = (e) => {
      //remove for loop
      for (const f of e.features) {
        changeColor(f.id);
        axios.post('http://localhost:8080/api/trash', {
          id: f.id,
          type: "Feature",
          properties: {
            category: "trash",
            notes: "",
            user: "Matt",
            date: "6/27/2023"
          },
          geometry: {coordinates: f.geometry.coordinates, type: "Polygon"}
        });
      }
      props.handleOpen(e.features[0]);
  
      setPolygonFeatures(currFeatures => {
        const newFeatures = {...currFeatures};
        for (const f of e.features) {
          newFeatures[f.id] = f;
        }
        return newFeatures;
      });
    }

    //need to persist notes below, currently """"
    const onUpdate = (e) => {
      for (const f of e.features) {
        axios.post('http://localhost:8080/api/trash', {
          id: f.id,
          type: "Feature",
          properties: {
            category: "trash",
            notes: "",
            user: "Matt",
            date: "6/27/2023"
          },
          geometry: {coordinates: f.geometry.coordinates, type: "Polygon"}
        });
      }
  
      setPolygonFeatures(currFeatures => {
        const newFeatures = {...currFeatures};
        for (const f of e.features) {
          newFeatures[f.id] = f;
        }
        return newFeatures;
      });
    }
    
    const onDelete = (e) => {
      for (const f of e.features) {
        axios.delete(`http://localhost:8080/api/trash/${f.id}`);
      }

      setPolygonFeatures(currFeatures => {
        const newFeatures = {...currFeatures};
        for (const f of e.features) {
          delete newFeatures[f.id];
        }
        return newFeatures;
      });
    };

    map.current.on('draw.create', onCreate);
    map.current.on('draw.delete', onDelete);
    map.current.on('draw.update', onUpdate);

    const getTrashPolygons = async () => {
      const results = await axios('http://localhost:8080/api/trash');
      let pgId;
      for (let id in results.data) {
        if (results.data[id].geometry.coordinates) {
          pgId = draw.add(results.data[id]);
        } else {
          axios.delete(`http://localhost:8080/api/trash/${id}`);
        }
      }
      //TODO (SERVER): repeat for all category endpoints
      setPolygonFeatures(results.data);

      //https://gist.github.com/dnseminara/0790e53cef9867e848e716937727ab18
      //https://stackoverflow.com/questions/60085087/add-onclick-to-a-mapbox-marker-element
    };

    getTrashPolygons();

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });
       
    map.current.on('idle', function() {
      if (!map.current.getLayer('polygons-hot')) {
        map.current.addLayer({
          'id': 'polygons-hot',
          'type': 'fill',
          'source': 'mapbox-gl-draw-hot',
          'layout': {},
          'paint': {
            'fill-opacity': 0
          }
        });
        map.current.addLayer({
          'id': 'polygons-cold',
          'type': 'fill',
          'source': 'mapbox-gl-draw-cold',
          'layout': {},
          'paint': {
            'fill-opacity': 0
          }
        });  
      }  
    });

    map.current.on('mouseenter', 'polygons-hot', (e) => {
      // Change the cursor style as a UI indicator.
      // map.current.getCanvas().style.cursor = 'pointer';
       
      const coordinates = e.features[0].geometry.coordinates.slice();
      // const severity = e.features[0].properties.severity;

      const turfPoly = polygon(coordinates);
      const turfCentroid = centroid(turfPoly);

      //https://gis.stackexchange.com/questions/279127/how-to-add-css-styling-in-mapbox-gl-popup
      popup.setLngLat(turfCentroid.geometry.coordinates).setHTML("foo").addTo(map.current);
    });

    map.current.on('mouseleave', 'polygons-hot', () => {
      // map.current.getCanvas().style.cursor = 'pointer';
      popup.remove();
    });

    map.current.on('mouseenter', 'polygons-cold', (e) => {
      // map.current.getCanvas().style.cursor = 'pointer';
       
      const coordinates = e.features[0].geometry.coordinates.slice();
      // const severity = e.features[0].properties.severity;

      const turfPoly = polygon(coordinates);
      const turfCentroid = centroid(turfPoly);
      //https://gis.stackexchange.com/questions/279127/how-to-add-css-styling-in-mapbox-gl-popup
      popup.setLngLat(turfCentroid.geometry.coordinates).setHTML("foo").addTo(map.current);
    });

    map.current.on('mouseleave', 'polygons-cold', (e) => {
      // map.current.getCanvas().style.cursor = 'pointer';
      popup.remove();
    });
  });

  return (
    <div
      ref={mapContainer}
      className="map-container"
      style={{height: "650px"}} />
  );
}
