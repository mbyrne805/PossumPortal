import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  SvgIcon,
  TextField,
  Typography
} from '@mui/material';
import { Image } from 'mui-image';
import { ReactComponent as PPLogo } from '../../assets/pplogoblack.svg';
import naturgemalde2 from '../../assets/naturgemalde2.jpg';

//https://stackoverflow.com/questions/13772427/shadow-not-showing-up
export default function Login() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[300] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: "100px"
        }}
      >
        <Image src={naturgemalde2} style={{boxShadow: "1000px"}}/>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={10} square>
        <Box
          sx={{
            my: 1,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <SvgIcon
            fontSize="large"
            component={PPLogo}
            viewBox="158 110 143 113"
            sx={{ display: "flex", mt: 5, mb: 10}}/>
          <Typography variant="h4" fontWeight="bold">
            Welcome back
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, height: 55 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}