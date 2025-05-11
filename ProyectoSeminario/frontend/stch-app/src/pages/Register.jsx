import './register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    fechaNacimiento: '',
    celular: '',
    correo: '',
    grupoSanguineo: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/paciente/crear', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          apellido: form.apellido,
          edad: parseInt(form.edad),   // podés calcular según fechaNacimiento más adelante
          fechaNacimiento: form.fechaNacimiento,
          celular: form.celular,
          correo: form.correo,
          grupoSanguineo: form.grupoSanguineo,
        }),
      });

      if (response.ok) {
        navigate('/home');
      } else {
        const error = await response.json();
        console.error('Error al registrar paciente:', error);
      }
    } catch (err) {
      console.error('Error de red:', err);
    }
  };

  return (
    <div id="contenido">
      <div id="formulario2">
        <div id="botones2">
          <h1 id="inicio2">Registrarse</h1>
        </div>
        <b>
          <p>¡Cuéntanos sobre ti!</p>
        </b>
        <form id="datos" onSubmit={handleRegister}>
          <div id="campos">
            <div>
              <h5 className="textdata">Nombre</h5>
              <input
                type="text"
                name="nombre"
                placeholder="Ingrese su Nombre"
                value={form.nombre}
                onChange={handleChange}
              />
              <h5 className="textdata">Apellido</h5>
              <input
                type="text"
                name="apellido"
                placeholder="Ingrese su Apellido"
                value={form.apellido}
                onChange={handleChange}
              />
              <h5 className="textdata">Edad</h5>
              <input
                type="text"
                name="edad"
                placeholder="Ingrese su edad"
                value={form.edad}
                onChange={handleChange}
              />
            </div>
            <div>
              <h5 className="textdata">Fecha de Nacimiento</h5>
              <input
                type="date"
                name="fechaNacimiento"
                placeholder="Ingrese su Fecha de Nacimiento"
                value={form.fechaNacimiento}
                onChange={handleChange}
              />
              <h5 className="textdata">Teléfono</h5>
              <input
                type="text"
                name="celular"
                placeholder="Ingrese su Teléfono"
                value={form.celular}
                onChange={handleChange}
              />
              <h5 className="textdata">Correo</h5>
              <input
                type="text"
                name="correo"
                placeholder="Ingrese su correo"
                value={form.correo}
                onChange={handleChange}
              />
              <h5 className="textdata">Grupo Sanguineo</h5>
              <input
                type="text"
                name="grupoSanguineo"
                placeholder="Ingrese su Grupo Sanguineo"
                value={form.grupoSanguineo}
                onChange={handleChange}
              />
            </div>
          </div>
          <button id="ingresar" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
