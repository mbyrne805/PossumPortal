import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import axios from 'axios';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import MapboxStyle from './style/DrawStyle';
import PolygonPopup from './draw/PolygonPopup';
import ProjectsMenu from './generalControl/ProjectsMenu';

var StaticMode = require('@mapbox/mapbox-gl-draw-static-mode');

const drawerWidth = 250;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'drawerOpen' })(
  ({ theme, drawerOpen }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: `-${drawerWidth}px`,
    marginLeft: drawerOpen ? `-${drawerWidth}px` : 0,
    ...(drawerOpen && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
    width: "100vw",
    height: "100vh"
  }),
);

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Mapper(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const draw = useRef(null);
  const [lng, setLng] = useState(-110.730464);
  const [lat, setLat] = useState(32.44206);
  const [zoom, setZoom] = useState(14);
  const [polygonFeatures, setPolygonFeatures] = useState(null);
  const action = useRef(null);
  const category = useRef(null);
  const [cont, setCont] = useState(true);

  const theme = useTheme();

  useEffect(() => {
    action.current = props.action;
    category.current = props.category;
  });

  useEffect(() => {
    if (map.current) return;
    console.log('test')
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false
    });

    var modes = MapboxDraw.modes;
    modes.static = StaticMode;

    draw.current = new MapboxDraw({
      userProperties: true,
      displayControlsDefault: false,
      controls: {
        point: true,
        line_string: true,
        polygon: true,
        combine_features: true,
        uncombine_features: true,
        trash: true
      },
      modes: modes,
      defaultMode: 'draw_polygon',
      styles: MapboxStyle.styles
    });
    console.log(draw.current);
  
    map.current.addControl(draw.current);


    map.current.on('load', function() {
      draw.current.changeMode('static');
    });

    document.getElementsByClassName('mapboxgl-ctrl-group')[0].style.display = 'none'

    if (props.newPoly.current) {
      draw.current.add(props.newPoly.current);
    }

    function changeColor(featureId) {
      switch(category.current) {
        case "trash":
          draw.current.setFeatureProperty(featureId, 'portColor', '#880808');
          break;
        case "ecology":
          draw.current.setFeatureProperty(featureId, 'portColor', '#00FF00');
          break;
        case "restoration":
          draw.current.setFeatureProperty(featureId, 'portColor', '#00FF00');
          break;  
        case "fire":
          draw.current.setFeatureProperty(featureId, 'portColor', '#00FF00');
          break;
        case "custom":
          draw.current.setFeatureProperty(featureId, 'portColor', '#A020F0');
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
      let newPoly = e.features[0];
      newPoly.properties.user = "Matt"
      props.handleOpen(newPoly);
  
      setPolygonFeatures(currFeatures => {
        const newFeatures = {...currFeatures};
        for (const f of e.features) {
          newFeatures[f.id] = f;
        }
        return newFeatures;
      });
    }

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
        pgId = draw.current.add(results.data[id]);
      }
      setPolygonFeatures(results.data);
    };

    getTrashPolygons();
       
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
  });

  useEffect(() => {
    if (map.current && props.notesCreated && cont) {
      const getTrashPolygons = async () => {
        const results = await axios('http://localhost:8080/api/trash');
        let pgId;
        for (let id in results.data) {
          pgId = draw.current.add(results.data[id]);
        }
        setCont(false);
        setPolygonFeatures(results.data);
        };
      getTrashPolygons();
    }
  });

  return (
    <>
      <ProjectsMenu drawerOpen={props.drawerOpen} drawerWidth={drawerWidth}/>
      <Main open={props.drawerOpen}>
        <div
          ref={mapContainer}
          className="map-container"
          style={{width: "100%", height: "100%"}} 
        />
        <PolygonPopup map={map.current} newPoly={props.newPoly}/>
      </Main>
    </>
  );
}
