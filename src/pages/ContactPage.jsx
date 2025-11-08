import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <div className="container my-5">

      {/* Encabezado */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Contáctanos</h1>
        <p className="lead text-muted">
          ¿Tienes alguna consulta o sugerencia? Estamos para ayudarte.
        </p>
      </div>

      {/* Tarjetas de información */}
      <div className="row justify-content-center mb-4 g-3">

        <div className="col-md-4">
          <div className="card text-center shadow-sm border-0 rounded-4 h-100">
            <div className="card-body py-4">
              <div className="fs-1 mb-2">📍</div>
              <h6 className="fw-bold">Ubicación</h6>
              <p className="text-muted small mb-0">TECSUP - Lima, Perú</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow-sm border-0 rounded-4 h-100">
            <div className="card-body py-4">
              <div className="fs-1 mb-2">📧</div>
              <h6 className="fw-bold">Email</h6>
              <p className="text-muted small mb-0">contacto@pokeapp.com</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow-sm border-0 rounded-4 h-100">
            <div className="card-body py-4">
              <div className="fs-1 mb-2">📱</div>
              <h6 className="fw-bold">Teléfono</h6>
              <p className="text-muted small mb-0">+51 999 999 999</p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <ContactForm />
        </div>
      </div>

      {/* Pie informativo */}
      <div className="text-center mt-4">
        <p className="text-muted">
          <small>Tiempo de respuesta: 24–48 horas hábiles.</small>
        </p>
      </div>

    </div>
  );
};

export default ContactPage;
