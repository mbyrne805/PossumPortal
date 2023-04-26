import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import TopBar from './components/layout/TopBar';
import Mapper from './components/mapping/Mapper';
import Box from '@mui/material/Box';

function Item(BoxProps) {
  const { sx, ...other } = BoxProps;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '10px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

function App() {
  return <>
    <Helmet>
      <html lang="en" />
      <title>Possum Portal</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <div style={{backgroundColor: "#4A5553"}}>
      <div style={{width: '100%'}}>
        <Box sx={{display: 'grid', gridTemplateRows: '1fr 6fr'}}>
          <Item>
            <TopBar/>
          </Item>
          <Item>
            <Mapper/>
          </Item>
        </Box>
      </div>
    </div>
  </>;
}

export default App;