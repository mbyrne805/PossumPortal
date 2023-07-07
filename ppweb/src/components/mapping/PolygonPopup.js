import { useState, useContext } from 'react';
import { PolygonContext } from './context/PolygonContext.js';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {centroid, polygon} from '@turf/turf';

export default function PolygonPopup(props) {
  const { map, newPoly } = props;

  const polygonContext = useContext(PolygonContext)
  console.log(polygonContext);

  if (map) {
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });
  
    map.on('mouseenter', 'polygons-hot', (e) => {
      // Change the cursor style as a UI indicator.
      // map.current.getCanvas().style.cursor = 'pointer';
      console.log(newPoly);
      const coordinates = e.features[0].geometry.coordinates.slice();
      // const severity = e.features[0].properties.severity;
  
      const turfPoly = polygon(coordinates);
      const turfCentroid = centroid(turfPoly);
  
      let popupHtml;
      if (e.features[0].properties.user_notes) {
        popupHtml = `
          <h3>Trash AoI</h3>
          <h4>${e.features[0].properties.user_notes}</h4> 
          <h4>by ${e.features[0].properties.user_user} on ${e.features[0].properties.user_date}</h4>  
        `;
      } else {
        popupHtml = `
          <h3>Trash AoI</h3>
          <h4>${newPoly.current.properties.notes}</h4> 
          <h4>by ${newPoly.current.properties.user} on ${newPoly.current.properties.date}</h4>  
        `;
      }
  
      //https://gis.stackexchange.com/questions/279127/how-to-add-css-styling-in-mapbox-gl-popup
      popup.setLngLat(turfCentroid.geometry.coordinates).setHTML(popupHtml).addTo(map);
    });
  
    map.on('mouseleave', 'polygons-hot', () => {
      // map.current.getCanvas().style.cursor = 'pointer';
      popup.remove();
    });
  
    map.on('mouseenter', 'polygons-cold', (e) => {
      // map.current.getCanvas().style.cursor = 'pointer';
      console.log(newPoly);
      const coordinates = e.features[0].geometry.coordinates.slice();
      // const severity = e.features[0].properties.severity;
  
      const turfPoly = polygon(coordinates);
      const turfCentroid = centroid(turfPoly);
      //https://gis.stackexchange.com/questions/279127/how-to-add-css-styling-in-mapbox-gl-popup
            
      let popupHtml;
      if (e.features[0].properties.user_notes) {
        popupHtml = `
          <h3>Trash AoI</h3>
          <h4>${e.features[0].properties.user_notes}</h4> 
          <h4>by ${e.features[0].properties.user_user} on ${e.features[0].properties.user_date}</h4>  
        `;
      } else {
        popupHtml = `
          <h3>Trash AoI</h3>
          <h4>${newPoly.current.properties.notes}</h4> 
          <h4>by ${newPoly.current.properties.user} on ${newPoly.current.properties.date}</h4>  
        `;
      }
  
      popup.setLngLat(turfCentroid.geometry.coordinates).setHTML(popupHtml).addTo(map);
    });
  
    map.on('mouseleave', 'polygons-cold', (e) => {
      // map.current.getCanvas().style.cursor = 'pointer';
      popup.remove();
    });  
  }
}