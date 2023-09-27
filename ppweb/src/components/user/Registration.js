import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Divider, Link, Stack, TextField, Typography } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as PPLogo } from '../../assets/pplogoblack.svg';
import TextDivider from '../layout/TextDivider';

export default function Registration() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));
  
  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     {/* register your input into the hook by invoking the "register" function */}
  //     <input defaultValue="test" {...register("example")} />

  //     {/* include validation with required or other standard HTML validation rules */}
  //     <input {...register("exampleRequired", { required: true })} />
  //     {/* errors will return when field validation fails  */}
  //     {errors.exampleRequired && <span>This field is required</span>}

  //     <input type="submit" />
  //   </form>
  // )

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));
  //https://stackoverflow.com/questions/50766693/how-to-center-a-component-in-material-ui-and-make-it-responsive
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        {/* <Grid xs={12}>
          <Item>
            <Typography>adsf</Typography>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
        <Grid
          container
          item
          xs={10}
          justifyContent="center"
        >
          <SvgIcon
            fontSize="large"
            component={PPLogo}
            viewBox="158 110 143 113"
            sx={{ display: "flex", mt: 5, mb: 10 }}
          />
        </Grid>
        <Grid
          container
          item
          xs={10} md={4} lg={3}
          justifyContent="center"
          sx={{mb: 1}}
        >
          <Typography textAlign="center" variant="h5" fontSize={32} fontWeight="bold" mb={1}>
            Create your account
          </Typography>
          <Typography textAlign="center" fontSize={12} mb={2}>
            Note that phone verification is required for signup. Your number will only be used to verify your identity for security.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} style={{width: "100%"}}>
            <Controller 
              render={({ field }) => <TextField id="outlined-basic" label="Email address" variant="outlined"
                {...field} 
                style={{width: "100%"}} />}
              name="firstName"
              control={control}
              defaultValue=""
            />
            <Button style={{width: "100%", marginTop: 10, height: 55}} variant="contained">Continue</Button>
          </form>
          <Stack direction="row" spacing={1} mt={2}>
            <Typography fontSize={12}>
              Already have an account?
            </Typography>
            <Link fontSize={12} direction="column">Log in</Link>
          </Stack>
        </Grid>
        <Grid
          container
          item
          xs={10} md={4} lg={3}
          justifyContent="center"
          sx={{mb: 15}}
        >
          <TextDivider />
          <Button style={{width: "100%", marginTop: 10, height: 55}} variant="outlined">
            Continue with Google
          </Button>
          <Button style={{width: "100%", marginTop: 10, height: 55}} variant="outlined">
            Continue with Microsoft
          </Button>
          <Button style={{width: "100%", marginTop: 10, height: 55}} variant="outlined">
            Continue with Apple
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}