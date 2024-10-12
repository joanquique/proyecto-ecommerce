import React, { useState } from 'react';
import {
  CheckoutContainer,
  Title,
  Form,
  Section,
  SectionTitle,
  Input,
  Button
} from './Checkout.styled.js';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa';

const Checkout = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [direccion, setDireccion] = useState('');
  const [metodoPago, setMetodoPago] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de confirmación de compra
    dispatch(clearCart());
    navigate('/confirmacion', { state: { direccion, metodoPago, cart } });
  };

  return (
    <CheckoutContainer>
      <Title>Confirmar Compra</Title>
      <Form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle><FaMapMarkerAlt /> Dirección de Envío</SectionTitle>
          <Input 
            type="text" 
            placeholder="Ingrese su dirección" 
            value={direccion} 
            onChange={(e) => setDireccion(e.target.value)} 
            required 
          />
        </Section>
        <Section>
          <SectionTitle><FaCreditCard /> Método de Pago</SectionTitle>
          <Input 
            type="text" 
            placeholder="Ingrese método de pago" 
            value={metodoPago} 
            onChange={(e) => setMetodoPago(e.target.value)} 
            required 
          />
          {/* Puedes agregar más opciones, como selectores de tarjetas */}
        </Section>
        <Button type="submit">Confirmar Compra</Button>
      </Form>
    </CheckoutContainer>
  );
};

export default Checkout;
