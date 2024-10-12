import React, { useState } from 'react';
import {
  RegistroContainer,
  Form,
  Title,
  Input,
  Button,
  ErrorMessage
} from './Registro.styled.js';
import { useDispatch } from 'react-redux';
import { registerStart, registerSuccess, registerFailure } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerStart());
    try {
      // Simulación de llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const userData = {
        id: 2,
        name: name,
        email: email,
      };

      dispatch(registerSuccess(userData));
      navigate('/');
    } catch (err) {
      dispatch(registerFailure('Error al registrar usuario'));
      setError('Error al registrar. Inténtalo de nuevo.');
    }
  };

  return (
    <RegistroContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Registro de Usuario</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input 
          type="text" 
          placeholder="Nombre Completo" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
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
        <Button type="submit">Registrar</Button>
      </Form>
    </RegistroContainer>
  );
};

export default Registro;
