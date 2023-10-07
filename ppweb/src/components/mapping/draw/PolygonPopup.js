import { useState, useContext } from 'react';
import { PolygonContext } from '../context/PolygonContext.js';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {centroid, polygon} from '@turf/turf';

export default function PolygonPopup(props) {
  const { map, newPoly } = props;

  const polygonContext = useContext(PolygonContext)

  if (map) {
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });
  
    map.on('mouseenter', 'polygons-hot', (e) => {
      // Change the cursor style as a UI indicator.
      // map.current.getCanvas().style.cursor = 'pointer';
      const coordinates = e.features[0].geometry.coordinates.slice();
      // const severity = e.features[0].properties.severity;
  
      const turfPoly = polygon(coordinates);
      const turfCentroid = centroid(turfPoly);
      let popupHtml;
      if (e.features[0].properties.user_details || e.features[0].properties.user_details === "") {
        popupHtml = `
          <h3>${e.features[0].properties.user_projectName}</h3>
          <h4>${e.features[0].properties.user_details}</h4> 
          <h4>by ${e.features[0].properties.user_user} on ${e.features[0].properties.user_date}</h4>  
        `;
      } else {
        newPoly.current ? 
        popupHtml = `
          <h3>${e.features[0].properties.user_projectName}</h3>
          <h4>${newPoly.current.properties.details}</h4> 
          <h4>by ${newPoly.current.properties.user} on ${newPoly.current.properties.date}</h4>  
        `: popupHtml = false;
      }
  
      //https://gis.stackexchange.com/questions/279127/how-to-add-css-styling-in-mapbox-gl-popup
      if (popupHtml) {
        popup.setLngLat(turfCentroid.geometry.coordinates).setHTML(popupHtml).addTo(map);
      }
    });
  
    map.on('mouseleave', 'polygons-hot', () => {
      // map.current.getCanvas().style.cursor = 'pointer';
      popup.remove();
    });
  
    map.on('mouseenter', 'polygons-cold', (e) => {
      // map.current.getCanvas().style.cursor = 'pointer';
      const coordinates = e.features[0].geometry.coordinates.slice();
      // const severity = e.features[0].properties.severity;
  
      const turfPoly = polygon(coordinates);
      const turfCentroid = centroid(turfPoly);
      //https://gis.stackexchange.com/questions/279127/how-to-add-css-styling-in-mapbox-gl-popup
            
      let popupHtml;
      if (e.features[0].properties.user_details || e.features[0].properties.user_details === "") {
        popupHtml = `
          <h3>${e.features[0].properties.user_projectName}</h3>
          <h4>${e.features[0].properties.user_details}</h4> 
          <h4>by ${e.features[0].properties.user_user} on ${e.features[0].properties.user_date}</h4>  
        `;
      } else {
        popupHtml = `
          <h3>${e.features[0].properties.user_projectName}</h3>
          <h4>${newPoly.current.properties.details}</h4> 
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