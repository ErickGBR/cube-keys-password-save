// src/components/Register.js
import React, { useState } from 'react';
import '../assets/css/register.css';
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Lógica de registro, por ejemplo, enviar datos al servidor
    console.log(`Registrando usuario: ${username} con contraseña: ${password}`);
  };

  return (
    <div className="register-container">
      <form>
      <h2>Register</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </label>
        <button type="button" className="btn btn-primary" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
