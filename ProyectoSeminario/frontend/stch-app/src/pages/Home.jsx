import './Home.css';

export default function Home() {
  return (
    <div className="content">
      <h1>Bienvenido a STCH</h1>
      <p>Aquí puedes colocar el contenido principal de tu sitio web.</p>
      <div className="info-cards">
        <div className="card">
          <h3>Próximo turno</h3>
          <p>
            Su próximo turno es el <strong>5 de mayo a las 10:00 AM</strong> en
            el Hospital Central.
          </p>
        </div>
        <div className="card">
          <h3>Congestión reciente</h3>
          <p>
            El último hospital que visitó tenía una ocupación del{' '}
            <strong>85%</strong>.
          </p>
        </div>
        <div className="card">
          <h3>Hospitales cercanos</h3>
          <p>
            Hospital del Sur (1.2 km)
            <br />
            Clínica Santa Fe (2.0 km)
          </p>
        </div>
        <div className="card">
          <h3>Historial de turnos</h3>
          <p>
            Últimos 3 turnos:
            <br />✔ 10/04
            <br />✔ 20/03
            <br />✔ 05/03
          </p>
        </div>
      </div>
    </div>
  );
}
