import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

export default function AppsListing(props) {
  const open = Boolean(props.anchorEl);
  const id = open ? "apps-listing" : undefined;

  return (
    <Popper id={id} open={open} anchorEl={props.anchorEl}>
      <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          The content of the Popper.
      </Box>
    </Popper>
  );
}