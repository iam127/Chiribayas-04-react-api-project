import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Título */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">📧 Contáctanos</h1>
            <p className="lead text-muted">
              ¿Tienes alguna pregunta o sugerencia? Estamos aquí para ayudarte.
            </p>
          </div>

          {/* Tarjetas de información */}
          <div className="row mb-4">
            <div className="col-md-4 mb-3">
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body">
                  <div className="fs-1 mb-2">📍</div>
                  <h6 className="card-title">Ubicación</h6>
                  <p className="card-text text-muted small">
                    TECSUP - Lima, Perú
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body">
                  <div className="fs-1 mb-2">📧</div>
                  <h6 className="card-title">Email</h6>
                  <p className="card-text text-muted small">
                    contacto@pokeapp.com
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body">
                  <div className="fs-1 mb-2">📱</div>
                  <h6 className="card-title">Teléfono</h6>
                  <p className="card-text text-muted small">
                    +51 999 999 999
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <ContactForm />

          {/* Tiempo de respuesta */}
          <div className="text-center mt-4">
            <p className="text-muted">
              <small>Tiempo de respuesta aproximado: 24–48 horas hábiles</small>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
