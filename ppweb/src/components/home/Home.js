import { useState, useRef } from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import TopBar from '../layout/TopBar';
import { Image } from 'mui-image';
import naturgemalde from '../../assets/naturgemalde.webp';
import { useScrollTrigger } from '@mui/material';

function Item(props) {
  const { sx, padding, ...other } = props;
  return (
    <Box
      sx={{
        // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        // color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        bgcolor: "#383836",
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


//https://github.com/mui/material-ui/blob/v5.14.0/docs/data/material/getting-started/templates/dashboard/Dashboard.js

export default function Home() {
  const script = () => {setTrigger(true)};
  window.addEventListener("scroll", script);
  const [trigger, setTrigger] = useState(false);

  return (
    // <Box style={{position: "absolute", top: 0, left: 0, bottom: 0, right: 0, overflow: "auto", background: "white"}}>
    <Box sx={{ display: "flex"}}>
      <TopBar trigger={trigger}/>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
        }}>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            {/* <Box 
              component="img"
              sx={{
                height: 500,
                width: 500
              }}
            /> */}
            <Image src={naturgemalde}/>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Paper>asdfsd</Paper>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Paper>asdfsd</Paper>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Paper>asdf</Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}