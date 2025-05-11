import './sidebar.css';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <button
        className="toggle-btn"
        onClick={() => {
          document.getElementById('sidebar').classList.toggle('expanded');
        }}
      >
        <i className="fas fa-bars"></i>
      </button>

      <nav>
        <Link to="/home">
          <i className="fas fa-home"></i>
          <span>Inicio</span>
        </Link>
        <Link to="/historia">
          <i className="fas fa-info"></i>
          <span>Historia Médica</span>
        </Link>
        <Link to="/turnos">
          <i className="fas fa-calendar"></i>
          <span>Turnos</span>
        </Link>
        <a href="#">
          <i className="fas fa-box"></i>
          <span>Orders</span>
        </a>
        <a href="#">
          <i className="fas fa-envelope"></i>
          <span>Messages</span>
        </a>
        <a href="#">
          <i className="fas fa-cog"></i>
          <span>Settings</span>
        </a>
        <a href="/reportes">
          <i className="fas fa-chart-line"></i>
          <span>Reportes</span>
        </a>
      </nav>

      <div className="user">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Usuario"
        />
        <div className="user-info">
          <strong>Jordan Alexander</strong>
          <br />
          <small>Cuenta Free</small>
        </div>
      </div>
      <a href="/" className="logout">
        <i className="fas fa-sign-out-alt"></i>
        <span>Cerrar sesión</span>
      </a>
    </div>
  );
}
