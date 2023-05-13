import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import TopBar from './components/layout/TopBar';
import Mapper from './components/mapping/Mapper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

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

function App() {
  return (
    /* <Helmet>
      <html lang="en" />
      <title>Possum Portal</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet> */
    <Box bgcolor="#4A5553" padding={1}>
      <Item marginBottom={1}>
        <TopBar/>
      </Item>
      <Item>
        <Mapper/>
      </Item>
    </Box>
  );
}

export default App;