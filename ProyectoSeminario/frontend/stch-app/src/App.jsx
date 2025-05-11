import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

import Home from './pages/Home';
import HistoriaMedica from './pages/HistoriaMedica';
import Turnos from './pages/Turnos';
import Reportes from './pages/Reportes';

import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas con AuthLayout (sin sidebar/header) */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Rutas con MainLayout (con sidebar/header) */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/historia" element={<HistoriaMedica />} />
          <Route path="/turnos" element={<Turnos />} />
          <Route path="/reportes" element={<Reportes />} />
          {/* Agregá más acá */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
