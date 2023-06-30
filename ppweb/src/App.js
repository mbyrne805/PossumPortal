import './App.css';
import { Helmet } from 'react-helmet';
import TopBar from './components/layout/TopBar';
import Mapper from './components/mapping/Mapper';
import CategorySelect from './components/mapping/Select';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme({
  typography: {
    
  }
});

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

//use speed dial here

function App() {
  const [category, setCategory] = useState(null);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Box bgcolor="#4A5553" padding={1}>
      <Item marginBottom={1}>
        <TopBar/>
      </Item>
      <Item flex={1} position="relative">
        <Mapper category={category}/>
          <CategorySelect position="absolute" handleChange={handleCategoryChange}/>
      </Item>
    </Box>
  );
}

export default App;