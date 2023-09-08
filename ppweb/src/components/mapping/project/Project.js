import * as React from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//Use list/collapse inside accordion for better appearance
export default function Project(props) {

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={props.handleDetailsSelect}>
          <ListItemText primary={`Project ${props.projNum}`}/>
        </ListItemButton>
      </ListItem>
    </List>
  );
}