import { useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import AppsListing from './AppsListing';

export default function BackButton() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  }

  return (
    <>
      <IconButton
        onClick={handleClick}
        style={{
          position: "absolute",
          bottom: 17,
          right: 80,
          borderColor: "white",
          color: "white"
      }}>
        <AppsIcon
          style={{ fontSize: 40}}
        />
      </IconButton>
      <AppsListing anchorEl={anchorEl} />
    </>
  )
}