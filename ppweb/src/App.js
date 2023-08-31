import Home from './components/home/Home';
import MapHome from './components/mapping/MapHome';
import ProjectsWrapper from './components/mapping/ProjectsWrapper';
import Login from './components/user/Login';
import Registration from './components/user/Registration';
import Error from './components/routing/Error';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/maps" element={<MapHome />} />
      <Route path="/onboarding" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;