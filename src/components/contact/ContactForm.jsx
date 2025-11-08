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
    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es requerido';
        if (value.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres';
        return '';

      case 'email':
        if (!value.trim()) return 'El email es requerido';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Email inválido';
        return '';

      case 'subject':
        if (!value.trim()) return 'El asunto es requerido';
        return '';

      case 'message':
        if (!value.trim()) return 'El mensaje es requerido';
        if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        return '';

      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitStatus({
        type: 'error',
        message: 'Por favor corrige los errores antes de enviar'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus({
        type: 'success',
        message: '¡Mensaje enviado correctamente! Te contactaremos pronto.'
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTouched({});
      setErrors({});

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Error al enviar el mensaje. Intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card shadow">
      <div className="card-body p-4">
        <form onSubmit={handleSubmit} noValidate>
          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''} ${touched.name && !errors.name && formData.name ? 'is-valid' : ''}`}
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tu nombre completo"
            />
            {touched.name && errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''} ${touched.email && !errors.email && formData.email ? 'is-valid' : ''}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="tu@email.com"
            />
            {touched.email && errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Asunto */}
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Asunto <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${touched.subject && errors.subject ? 'is-invalid' : ''} ${touched.subject && !errors.subject && formData.subject ? 'is-valid' : ''}`}
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Asunto del mensaje"
            />
            {touched.subject && errors.subject && (
              <div className="invalid-feedback">{errors.subject}</div>
            )}
          </div>

          {/* Mensaje */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje <span className="text-danger">*</span>
            </label>
            <textarea
              className={`form-control ${touched.message && errors.message ? 'is-invalid' : ''} ${touched.message && !errors.message && formData.message ? 'is-valid' : ''}`}
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
            {touched.message && errors.message && (
              <div className="invalid-feedback">{errors.message}</div>
            )}
            {formData.message && (
              <small className="text-muted">
                {formData.message.length} caracteres
              </small>
            )}
          </div>

          {/* Alertas */}
          {submitStatus && (
            <div className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'} d-flex align-items-center`}>
              <span className="me-2">
                {submitStatus.type === 'success' ? '✅' : '❌'}
              </span>
              {submitStatus.message}
            </div>
          )}

          {/* Botón */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Enviando...
                </>
              ) : (
                <>📧 Enviar Mensaje</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
