import './Turnos.css';
import { useEffect, useState } from 'react';

export default function Turnos() {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/medico')
      .then((res) => res.json())
      .then((data) => {
        console.log('Médicos recibidos:', data); // ← Verificá esto en la consola
        setMedicos(data);
      })
      .catch((err) => console.error('Error al obtener médicos:', err));
  }, []);

  return (
    <div className="content">
      <h1>Turnos Activos</h1>
      <div className="table-turno">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Especialidad</th>
              <th>Especialista</th>
              <th>Anular</th>
              <th>Imprimir</th>
              <th>Información</th>
            </tr>
          </thead>
          <tbody>
            {medicos.map((medico) => (
              <tr key={medico.id}>
                <td>18/05/25</td> {/* Simulado por ahora */}
                <td>08:00</td> {/* Simulado por ahora */}
                <td>{medico.especialidad?.nombre || 'Sin especialidad'}</td>
                <td>{medico.nombre}</td>
                <td>
                  <i className="fas fa-trash"></i>
                </td>
                <td>
                  <i className="fas fa-print"></i>
                </td>
                <td>
                  <i className="fas fa-info"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
