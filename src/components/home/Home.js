import { useState, useRef } from 'react';
import { 
  Box,
  Container,
  CssBaseline,
  GlobalStyles,
  Grid,
  Link,
  Paper,
  Typography
} from '@mui/material';
import { Image } from 'mui-image';
import HomeImage from './HomeImage';
import TopBar from '../layout/TopBar';
import Intro from './Intro';
import SectionIntro from './SectionIntro';
import naturgemalde from '../../assets/naturgemalde.webp';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Application Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Possum Portal
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Home() {
  // const script = () => {setTrigger(true)};
  // window.addEventListener("scroll", script);
  // const [trigger, setTrigger] = useState(false);

  return (
    // <Box style={{position: "absolute", top: 0, left: 0, bottom: 0, right: 0, overflow: "auto", background: "white"}}>
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <GlobalStyles 
        styles={{
          body: { backgroundColor: "#463E53"}
        }}
      />
      <TopBar trigger={true}/>
      <Box
        component="main"
        sx={{
          // backgroundColor: (theme) =>
          //   theme.palette.mode === 'light'
          //     ? theme.palette.grey[100]
          //     : theme.palette.grey[900],
          flexGrow: 1,
        }}>
        <Grid container justifyContent="center" sx={{height: "100vh"}}>
          <Grid item container xs={5} justifyContent="center" textAlign="center" alignItems="center">
            <Intro />
          </Grid>
          <Grid item container xs={7}>
            <img width="100%" src={naturgemalde}/>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>

          </Grid>
        </Grid>
        {/* <SectionIntro /> */}
        {/* <Copyright sx={{ pt: 4 }} /> */}
      </Box>
    </Box>
  );
}