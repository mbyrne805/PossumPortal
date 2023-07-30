import {
  Box,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,  
} from '@mui/material';

import {
  AddToPhotos,
  Pageview,
  ShapeLine
} from '@mui/icons-material';

const actions = [
  { icon: <AddToPhotos />, name: "dataset", operation: "dataset" },
  { icon: <ShapeLine />, name: "geometry", operation: "geometry" },
  { icon: <Pageview/>, name: "search", operation: "search" },
]

export default function ActionMenu(props) {
  return (
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16, color: "white" }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={(e) => props.handleChange(e, action.operation)}
          />
        ))}
      </SpeedDial>
  )
}