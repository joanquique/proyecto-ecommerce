import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const CheckoutContainer = styled.div`
  /* Estilos para el contenedor del checkout */
`;

const Form = styled.form`
  /* Estilos para el formulario */
`;

const Input = styled.input`
  /* Estilos para los inputs */
`;

const Button = styled.button`
  /* Estilos para el botón */
`;

const Checkout = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [direccion, setDireccion] = useState('');
  const [metodoPago, setMetodoPago] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de guardado de método de pago
    // Aquí podrías agregar lógica adicional
    dispatch(clearCart());
    navigate('/confirmacion', { state: { direccion, metodoPago, cart } });
  };

  return (
    <CheckoutContainer>
      <h2>Confirmar Compra</h2>
      <Form onSubmit={handleSubmit}>
        <h3>Dirección de Envío</h3>
        <Input 
          type="text" 
          placeholder="Ingrese su dirección" 
          value={direccion} 
          onChange={(e) => setDireccion(e.target.value)} 
          required 
        />
        
        <h3>Método de Pago</h3>
        <Input 
          type="text" 
          placeholder="Ingrese método de pago" 
          value={metodoPago} 
          onChange={(e) => setMetodoPago(e.target.value)} 
          required 
        />
        {/* Puedes agregar botones o selectores para métodos de pago simulados */}

        <Button type="submit">Confirmar Compra</Button>
      </Form>
    </CheckoutContainer>
  );
};

export default Checkout;
