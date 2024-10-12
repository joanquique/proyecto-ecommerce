import React from 'react';
import {
  ConfirmacionContainer,
  Message,
  Details,
  DetailItem,
  ProductsList,
  ProductItem,
  Total,
  HomeButton
} from './PostCheckout.styled.js';
import { useLocation, Link } from 'react-router-dom';

const PostCheckout = () => {
  const location = useLocation();
  const { direccion, metodoPago, cart } = location.state || {};

  if (!cart) {
    return (
      <ConfirmacionContainer>
        <Message>No hay detalles de compra para mostrar.</Message>
        <HomeButton to="/">Volver al Inicio</HomeButton>
      </ConfirmacionContainer>
    );
  }

  return (
    <ConfirmacionContainer>
      <Message>¡Gracias por tu compra!</Message>
      <Details>
        <DetailItem><span>Dirección de Envío:</span> {direccion}</DetailItem>
        <DetailItem><span>Método de Pago:</span> {metodoPago}</DetailItem>
        <DetailItem><span>Productos:</span></DetailItem>
        <ProductsList>
          {cart.items.map(item => (
            <ProductItem key={item.id}>{item.name} - ${item.price.toFixed(2)}</ProductItem>
          ))}
        </ProductsList>
        <Total>Total: ${cart.total.toFixed(2)}</Total>
      </Details>
      <HomeButton to="/">Volver al Inicio</HomeButton>
    </ConfirmacionContainer>
  );
};

export default PostCheckout;
