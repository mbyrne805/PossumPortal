import Home from './components/home/Home';
import Error from './components/routing/Error';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/onboarding" element={<Registration/>}/>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;