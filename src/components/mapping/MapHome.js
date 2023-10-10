import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './MapHome.css';
import TopBar from '../layout/TopBar';
import Mapper from '../mapping/Mapper';
import CategorySelect from './draw/CategorySelect';
import DrawControlGroup from './draw/DrawControlGroup';
import PolygonCreationDialog from './draw/PolygonCreationDialog';
import { PolygonContext } from '../mapping/context/PolygonContext';
import AppsButton from './generalControl/AppsButton';
import ActionMenu from './generalControl/ActionMenu';

function Item(props) {
  const { sx, padding, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        // border: '5px solid',
        // borderColor: (theme) =>
        //   theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        // borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
        width: "100%",
        height: "100%"
      }}
      {...other}
    />
  );
}

function MapHome(props) {
  const [action, setAction] = useState("null");
  const [category, setCategory] = useState("trash");
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const newPoly = useRef(null);
  const [notesCreated, setNotesCreated] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleActionChange = (e, operation) => {
    e.preventDefault();
    setAction(operation);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  }

  const handleOpen = (newPol) => {
    newPoly.current = newPol
    console.log(newPoly)
    setOpen(true);
  };

  const handleClose = (newPol) => {
    newPoly.current = newPol
    console.log(newPoly)
    setOpen(false);
    setNotesCreated(true);
  };

  if (action === "geometry") {
    document.getElementsByClassName("mapboxgl-ctrl-group")[0].style.display = ""
  } else if (action === "search" || action === "dataset") {
    console.log(document.getElementsByClassName("mapbox-ctrl-group"))
    document.getElementsByClassName("mapbox-ctrl-group")[0].style.display = false;
  }

  console.log(action);
//https://stackoverflow.com/questions/1776915/how-can-i-center-an-absolutely-positioned-element-in-a-div
  return (
    <>
      <Mapper
        action={action}
        category={category}
        handleOpen={handleOpen}
        drawerOpen={drawerOpen}
        handleDrawerClose={handleDrawerClose}
        newPoly={newPoly}
        notesCreated={notesCreated}/>
      <AppsButton />
      {action === "geometry" ? <CategorySelect category={category} handleChange={handleCategoryChange} /> : <></>}
      <ActionMenu handleChange={handleActionChange} handleDrawerOpen={handleDrawerOpen} />
      <PolygonCreationDialog
        open={open}
        handleClose={handleClose}
        newPoly={newPoly} />
    </>
  );
}

export default MapHome;