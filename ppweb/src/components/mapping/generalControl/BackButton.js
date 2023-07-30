import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { IconButton, Typography } from '@mui/material';
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    // <Chip>
    // <ArrowLeftIcon
    //   component={Link}
    //   to="/"
    //   style={{position: "absolute", bottom: 9, left: 9}} />
    // <Typography style={{position: "absolute", top: 20, left: 18, padding: 5, borderRadius: 4, color: "white"}}>sdfsf</Typography>
    // </Chip>
    // <Button
    //   variant="contained"
    //   startIcon={<ArrowLeftIcon />}
    //   style=
    //     {{
    //       position: "absolute",
    //       top: 10,
    //       left: 10,
    //       padding: 5,
    //       borderRadius: 4,
    //       color: "white"
    //     }}
    // >
    // </Button>
    <IconButton
      style={{
        position: "absolute",
        top: 3,
        left: 3,
        borderRadius: 4,
        color: "white"
      }}>
      <ArrowLeftIcon
        style={{ fontSize: 50}}
      />
    </IconButton>
  )
}