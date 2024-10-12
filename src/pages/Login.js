// src/pages/Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios'; 

const LoginContainer = styled.div`
  /* Estilos para el contenedor */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Form = styled.form`
  /* Estilos para el formulario */
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  /* Estilos para los inputs */
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1rem;
`;

const Button = styled.button`
  /* Estilos para el botón */
  padding: 10px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 15px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      // Simulación de una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const userData = {
        id: 1,
        name: 'Juan Pérez',
        email: email,
      };

      dispatch(loginSuccess(userData));
      navigate('/');
    } catch (err) {
      dispatch(loginFailure('Error al iniciar sesión'));
      setError('Credenciales inválidas');
    }
  };

  return (
    <LoginContainer>
      <h2>Iniciar Sesión</h2>
      <Form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input 
          type="email" 
          placeholder="Correo Electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <Input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <Button type="submit">Ingresar</Button>
      </Form>
    </LoginContainer>
  );
};

export default Login;
