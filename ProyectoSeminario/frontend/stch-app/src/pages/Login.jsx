import './login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };
  return (
    <div id="contenido">
      <section id="formulario2">
        <div id="botones2">
          <h1 id="inicio2">Iniciar Sesión</h1>
        </div>
        <p>
          <strong>¡Bienvenido de nuevo!</strong>
        </p>
        <form id="datos">
          <h5 className="textdata">Nombre de Usuario</h5>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Ingrese su nombre"
          />

          <h5 className="textdata">Contraseña</h5>
          <input
            type="password"
            name="contraseña"
            id="contraseña"
            placeholder="Ingrese su contraseña"
          />

          <button type="submit" id="ingresar" onClick={handleLogin}>
            Ingresar
          </button>
        </form>
      </section>
    </div>
  );
}
