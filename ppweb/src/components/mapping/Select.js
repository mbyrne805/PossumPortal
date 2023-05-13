import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Select() {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={'Trash'}>Trash</MenuItem>
          <MenuItem value={'Eco'}>Eco</MenuItem>
          <MenuItem value={'Fire'}>Fire</MenuItem>
          <MenuItem value={'Forage'}>Forage</MenuItem>
          <MenuItem value={'Custom'}>Custom</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}