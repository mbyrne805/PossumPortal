import './MapHome.css';
import TopBar from '../layout/TopBar';
import Mapper from '../mapping/Mapper';
import CategorySelect from '../mapping/Select';
import PolygonCreationDialog from '../mapping/PolygonCreationDialog';
import { PolygonContext } from '../mapping/context/PolygonContext';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useRef } from 'react';

const theme = createTheme({
  typography: {
    
  }
});

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
      }}
      {...other}
    />
  );
}

//use speed dial here

function MapHome() {
  const [category, setCategory] = useState(null);
  const [open, setOpen] = useState(false);
  const newPoly = useRef(null);
  const [notesCreated, setNotesCreated] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleOpen = (newPol) => {
    console.log(newPol);
    newPoly.current = newPol;
    setOpen(true);
  };

  const handleClose = (newPoly) => {
    newPoly.current = newPoly;
    setOpen(false);
    setNotesCreated(true);
  };
  console.log(newPoly);
//https://stackoverflow.com/questions/1776915/how-can-i-center-an-absolutely-positioned-element-in-a-div
  return (
    <Box>
      <Item>
        <PolygonContext.Provider value={newPoly}>
          <Mapper
            category={category}
            handleOpen={handleOpen}
            newPoly={newPoly}
            notesCreated={notesCreated}/>
          <CategorySelect handleChange={handleCategoryChange} />
          <PolygonCreationDialog
            open={open}
            handleClose={handleClose}
            newPoly={newPoly} />
        </PolygonContext.Provider>
      </Item>
    </Box>
  );
}

export default MapHome;