import './AuthLayout.css';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="auth-container">
      <Header />
      <div className="layout">
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
