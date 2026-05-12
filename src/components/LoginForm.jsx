import { useState } from 'react';

export default function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usuario || !contraseña) {
      setError('Por favor completa todos los campos');
      return;
    }
    setError('');
    setLoading(true);
    
    // Simular petición al servidor
    setTimeout(() => {
      console.log('Iniciando sesión con:', { usuario, contraseña });
      setLoading(false);
      alert('Login exitoso!');
    }, 500);
  };

  return (
    <div className="login-form-wrapper">
      {/* Tarjeta de login */}
      <div className="login-card">
        
        {/* Encabezado */}
        <div className="login-header">
          <h1>
            <span className="login-header-title">Intranet Alumno</span>
          </h1>
        </div>

        {/* Subtítulo */}
        <div className="login-logo">
          <img
            src="/logo_sum_login.png"
            alt="Logo SUM"
          />
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="form-container">
          
          {/* Campo Usuario */}
          <div className="form-group custom-input">
            <label htmlFor="usuario">
              Usuario
            </label>
            <input
              type="text"
              id="usuario"
              placeholder="Ingrese usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          {/* Campo Contraseña */}
          <div className="form-group custom-input">
            <label htmlFor="contraseña">
              Contraseña
            </label>
            <input
              type="password"
              id="contraseña"
              placeholder="••••••••••••"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>

          {/* Mensaje de error */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {/* Botón Iniciar Sesión */}
          <button
            type="submit"
            disabled={loading}
            className="submit-button"
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>

        </form>

      </div>
    </div>
  );
}
