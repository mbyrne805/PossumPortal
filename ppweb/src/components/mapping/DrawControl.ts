import MapboxDraw from '@mapbox/mapbox-gl-draw';
import {useControl} from 'react-map-gl';

import type {MapRef, ControlPosition} from 'react-map-gl';

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & {
  features?: any;
  position?: ControlPosition;

  onCreate?: (evt: {features: object[]}) => void;
  onUpdate?: (evt: {features: object[]; action: string}) => void;
  onDelete?: (evt: {features: object[]}) => void;
};

export default function DrawControl(props: DrawControlProps) {
  let draw = new MapboxDraw();
  // console.log(props.features["54f8d1156c2121253e9ab45536d77c04"]);
  // draw.add({
  //   geometry: {
  //     coordinates: [[
  //       [-119.77685759635801, 34.462498181087454],
  //       [-119.72452904801142, 34.43558179225437], 
  //       [-119.72452904801142, 34.45865351376406],
  //       [-119.77685759635801, 34.462498181087454]
  //     ]],
  //     type: "Polygon"
  //   },
  //   type: "Feature",
  //   properties: {},
  //   id: "54f8d1156c2121253e9ab45536d77c04"
  // });
  console.log(draw);
  draw.add({ type: 'Point', coordinates: [0, 0] });
  useControl<MapboxDraw>(
    () => draw,
    ({map}: {map: MapRef}) => {
      map.on('draw.create', props.onCreate);
      map.on('draw.update', props.onUpdate);
      map.on('draw.delete', props.onDelete);
    },
    ({map}: {map: MapRef}) => {

      map.off('draw.create', props.onCreate);
      map.off('draw.update', props.onUpdate);
      map.off('draw.delete', props.onDelete);
    },
    {
      position: props.position
    }
  );

  return null;
}

DrawControl.defaultProps = {
  onCreate: () => {},
  onUpdate: () => {},
  onDelete: () => {}
};