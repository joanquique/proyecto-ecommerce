import React, { useState } from 'react';
import {
  LoginContainer,
  Form,
  Title,
  Input,
  Button,
  ErrorMessage
} from './Login.styled.js';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

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
      // Simulación de llamada a la API
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
      <Form onSubmit={handleSubmit}>
        <Title>Iniciar Sesión</Title>
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
