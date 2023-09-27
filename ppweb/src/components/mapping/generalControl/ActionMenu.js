import {
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
  { icon: <AddToPhotos />, name: "dataset", title: "Dataset", operation: "dataset" },
  { icon: <ShapeLine />, name: "geometry", title: "Geometry", operation: "geometry" },
  { icon: <Pageview/>, name: "search", title: "Search", operation: "search" },
]

export default function ActionMenu(props) {
  return (
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          '& .MuiFab-primary': {'&:hover': {backgroundColor: "#2b611f"}} 
        }}
        icon={<SpeedDialIcon />}
        FabProps={{
          sx: {
            backgroundColor: "#2b611f"
          }
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.operation}
            icon={action.icon}
            tooltipTitle={action.title}
            onClick={action.name !== "dataset" ? 
              (e) => props.handleChange(e, action.operation) : 
              () => props.handleDrawerOpen()}
          />
        ))}
      </SpeedDial>
  )
}