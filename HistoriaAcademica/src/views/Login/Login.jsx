import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const entrar = (e) => {
    e.preventDefault();
    navigate("/busqueda");
  }
  return (
    <>
      <div className="login-container">
        <div className="form-container">
          <form className="form" onSubmit={entrar} action="">
            <label>Correo</label>
            <input />
            <label>Contraseña</label>
            <input type='password' />
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login