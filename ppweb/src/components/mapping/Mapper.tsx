import * as React from 'react';
import {useState, useCallback} from 'react';
import {createRoot} from 'react-dom/client';
import Map from 'react-map-gl';

import DrawControl from './DrawControl';
import ControlPanel from './ControlPanel';

const TOKEN = 'pk.eyJ1IjoibWJ5cm5lNTEwIiwiYSI6ImNsNDQ3MDYxODA5a2wza3A3NTdydmp1bG0ifQ.FEbWBlXPfSgUt-Aibs5bUg';

export default function Mapper() {
  const [features, setFeatures] = useState({});

  const onUpdate = useCallback(e => {
    setFeatures(currFeatures => {
      const newFeatures = {...currFeatures};
      for (const f of e.features) {
        newFeatures[f.id] = f;
      }
      return newFeatures;
    });
  }, []);

  const onDelete = useCallback(e => {
    setFeatures(currFeatures => {
      const newFeatures = {...currFeatures};
      for (const f of e.features) {
        delete newFeatures[f.id];
      }
      return newFeatures;
    });
  }, []);

  console.log(features);

  return <>
    <Map
      initialViewState={{
        longitude: -91.874,
        latitude: 42.76,
        zoom: 12
      }}
      mapStyle="mapbox://styles/mapbox/satellite-v9"
      mapboxAccessToken={TOKEN}
    >
      <DrawControl
        position="top-left"
        displayControlsDefault={false}
        controls={{
          polygon: true,
          trash: true
        }}
        defaultMode="draw_polygon"
        onCreate={onUpdate}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </Map>
    {/* <ControlPanel polygons={Object.values(features)} /> */}
  </>;
}

// export function renderToDom(container) {
//   createRoot(container).render(<App />);
// }
