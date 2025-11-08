const ErrorAlert = ({ message, onRetry }) => {
  return (
    <div className="alert alert-danger d-flex align-items-center" role="alert">
      <div className="flex-grow-1">
        <strong>¡Error!</strong> {message}
      </div>
      {onRetry && (
        <button 
          className="btn btn-sm btn-outline-danger ms-3" 
          onClick={onRetry}
        >
          Reintentar
        </button>
      )}
    </div>
  );
};

export default ErrorAlert;