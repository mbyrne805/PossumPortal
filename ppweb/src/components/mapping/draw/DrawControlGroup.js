import {
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import CategorySelect from './CategorySelect';
import { CropSquareOutlined, DeleteOutline } from '@mui/icons-material';
import './Draw.css';

//TODO: custom polygon_draw event firing button
//https://stackoverflow.com/questions/60267213/how-can-i-use-custom-html-buttons-to-call-a-mapbox-gl-js-draw-polygon-function

export default function DrawControlGroup(props) {

  const handleModeChange = (e, newMode) => {
    console.log(newMode);
    switch(newMode) {
      case "create":
        console.log('t')
        props.draw.changeMode("simple_select");
        break;
      case "delete":
        console.log('test');
        const ids = props.draw.getSelectedIds();
        props.draw.delete(ids);
        break;
    }
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      exclusive 
      style={{position: "absolute", top: 5, right: 5}}
      onChange={handleModeChange}
    >
      <ToggleButton value="create" aria-label="create">
        <CropSquareOutlined />
      </ToggleButton>
      <ToggleButton value="delete" aria-label="delete">
        <DeleteOutline />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}