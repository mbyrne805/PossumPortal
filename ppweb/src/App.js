import './App.css';
import { Helmet } from 'react-helmet';
import TopBar from './components/layout/TopBar';
import Mapper from './components/mapping/Mapper';
import CategorySelect from './components/mapping/Select';
import PolygonCreationDialog from './components/mapping/PolygonCreationDialog';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';

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
        border: '10px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

//use speed dial here

function App() {
  const [category, setCategory] = useState(null);
  const [open, setOpen] = useState(false);
  const [newPoly, setNewPoly] = useState(null);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleOpen = (newPoly) => {
    setNewPoly(newPoly);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//https://stackoverflow.com/questions/1776915/how-can-i-center-an-absolutely-positioned-element-in-a-div
  return (
    <Box bgcolor="#4A5553" padding={1}>
      <Item marginBottom={1}>
        <TopBar/>
      </Item>
      <Item flex={1} position="relative">
        <Mapper category={category} handleOpen={handleOpen}/>
        <CategorySelect handleChange={handleCategoryChange}/>
        <PolygonCreationDialog
          open={open}
          handleClose={handleClose}
          newPoly={newPoly} />
      </Item>
    </Box>
  );
}

export default App;