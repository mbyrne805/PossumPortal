import { useState, useContext } from 'react';
import { PolygonContext } from './context/PolygonContext.js';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {centroid, polygon} from '@turf/turf';

export default function PolygonPopup(props) {
  const { map } = props;

  const polygonContext = useContext(PolygonContext)
  console.log(polygonContext);

  if (map) {
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });
  
    map.on('mouseenter', 'polygons-hot', (e) => {
      console.log(e);
      // Change the cursor style as a UI indicator.
      // map.current.getCanvas().style.cursor = 'pointer';
       
      const coordinates = e.features[0].geometry.coordinates.slice();
      // const severity = e.features[0].properties.severity;
  
      const turfPoly = polygon(coordinates);
      const turfCentroid = centroid(turfPoly);
  
      const user = e.features[0].properties.user_user;
      const date = e.features[0].properties.user_date;
      const notes = e.features[0].properties.user_notes;
  
      const popupHtml = `
        <h3>Trash AoI</h3>
        <h4>${notes}</h4> 
        <h4>by ${user} on ${date}</h4>  
      `;
  
      //https://gis.stackexchange.com/questions/279127/how-to-add-css-styling-in-mapbox-gl-popup
      popup.setLngLat(turfCentroid.geometry.coordinates).setHTML(popupHtml).addTo(map);
    });
  
    map.on('mouseleave', 'polygons-hot', () => {
      // map.current.getCanvas().style.cursor = 'pointer';
      popup.remove();
    });
  
    map.on('mouseenter', 'polygons-cold', (e) => {
      console.log(e);
      // map.current.getCanvas().style.cursor = 'pointer';
       
      const coordinates = e.features[0].geometry.coordinates.slice();
      // const severity = e.features[0].properties.severity;
  
      const turfPoly = polygon(coordinates);
      const turfCentroid = centroid(turfPoly);
      //https://gis.stackexchange.com/questions/279127/how-to-add-css-styling-in-mapbox-gl-popup
      
      const user = e.features[0].properties.user_user;
      const date = e.features[0].properties.user_date;
      const notes = e.features[0].properties.user_notes;
      
      const popupHtml = `
        <h3>Trash AoI</h3>
        <h4>${notes}</h4> 
        <h4>by ${user} on ${date}</h4>  
      `;
  
      popup.setLngLat(turfCentroid.geometry.coordinates).setHTML(popupHtml).addTo(map);
    });
  
    map.on('mouseleave', 'polygons-cold', (e) => {
      // map.current.getCanvas().style.cursor = 'pointer';
      popup.remove();
    });  
  }
}