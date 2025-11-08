import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    const trimmed = value.trim();
    if (!trimmed) return `El campo ${name} es obligatorio`;

    switch (name) {
      case 'name':
        return trimmed.length < 3 ? 'Debe tener mínimo 3 caracteres' : '';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
          ? ''
          : 'Correo inválido';
      case 'message':
        return trimmed.length < 10
          ? 'Debe tener mínimo 10 caracteres'
          : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({ name: true, email: true, subject: true, message: true });

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitStatus({
        type: 'error',
        message: 'Corrige los errores antes de enviar.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus({
        type: 'success',
        message: '¡Mensaje enviado correctamente!'
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
      setErrors({});
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error inesperado. Intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="card shadow-sm border-0 rounded-4"
      role="region"
      aria-label="Formulario de contacto"
    >
      <div className="card-body p-4">

        <form
          onSubmit={handleSubmit}
          noValidate
          role="form"
          aria-describedby="form-instructions"
        >
          <p id="form-instructions" className="visually-hidden">
            Todos los campos marcados con * son obligatorios.
          </p>

          {/* Nombre */}
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Nombre *</label>
            <input
              id="name"
              type="text"
              name="name"
              aria-label="Nombre"
              aria-required="true"
              aria-describedby={errors.name ? "error-name" : ""}
              className={`form-control form-control-lg ${
                touched.name && errors.name ? 'is-invalid' : ''
              }`}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tu nombre completo"
            />
            {touched.name && errors.name && (
              <div id="error-name" className="invalid-feedback" role="alert">
                {errors.name}
              </div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              aria-label="Correo electrónico"
              aria-required="true"
              aria-describedby={errors.email ? "error-email" : ""}
              className={`form-control form-control-lg ${
                touched.email && errors.email ? 'is-invalid' : ''
              }`}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="tu@email.com"
            />
            {touched.email && errors.email && (
              <div id="error-email" className="invalid-feedback" role="alert">
                {errors.email}
              </div>
            )}
          </div>

          {/* Asunto */}
          <div className="mb-3">
            <label className="form-label" htmlFor="subject">Asunto *</label>
            <input
              id="subject"
              type="text"
              name="subject"
              aria-label="Asunto"
              aria-required="true"
              aria-describedby={errors.subject ? "error-subject" : ""}
              className={`form-control form-control-lg ${
                touched.subject && errors.subject ? 'is-invalid' : ''
              }`}
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Motivo del mensaje"
            />
            {touched.subject && errors.subject && (
              <div id="error-subject" className="invalid-feedback" role="alert">
                {errors.subject}
              </div>
            )}
          </div>

          {/* Mensaje */}
          <div className="mb-3">
            <label className="form-label" htmlFor="message">Mensaje *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              aria-label="Mensaje"
              aria-required="true"
              aria-describedby={errors.message ? "error-message" : ""}
              className={`form-control form-control-lg ${
                touched.message && errors.message ? 'is-invalid' : ''
              }`}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Escribe tu mensaje..."
            ></textarea>
            {touched.message && errors.message && (
              <div id="error-message" className="invalid-feedback" role="alert">
                {errors.message}
              </div>
            )}
          </div>

          {/* Estado general */}
          {submitStatus && (
            <div
              className={`alert alert-${
                submitStatus.type === 'success' ? 'success' : 'danger'
              } mt-3`}
              role="alert"
            >
              {submitStatus.message}
            </div>
          )}

          {/* Botón */}
          <div className="d-grid mt-4">
            <button
              className="btn btn-primary btn-lg rounded-pill"
              type="submit"
              disabled={isSubmitting}
              aria-label="Enviar formulario de contacto"
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Enviando...
                </>
              ) : (
                'Enviar mensaje'
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;
