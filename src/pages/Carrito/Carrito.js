import React from 'react';
import {
  CarritoContainer,
  Title,
  CartItems,
  CartItem,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemPrice,
  RemoveButton,
  Total,
  CheckoutButton,
  EmptyMessage
} from './Carrito.styled.js';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../redux/slices/cartSlice';

const Carrito = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <CarritoContainer>
      <Title>Tu Carrito</Title>
      {cart.items.length === 0 ? (
        <EmptyMessage>El carrito está vacío.</EmptyMessage>
      ) : (
        <>
          <CartItems>
            {cart.items.map(item => (
              <CartItem key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                </ItemDetails>
                <RemoveButton onClick={() => handleRemove(item.id)}>Eliminar</RemoveButton>
              </CartItem>
            ))}
          </CartItems>
          <Total>Total: ${cart.total.toFixed(2)}</Total>
          <CheckoutButton to="/checkout">Proceder al Pago</CheckoutButton>
        </>
      )}
    </CarritoContainer>
  );
};

export default Carrito;
