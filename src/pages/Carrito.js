import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const CarritoContainer = styled.div`
  /* Estilos para el contenedor del carrito */
`;

const Item = styled.div`
  /* Estilos para cada item del carrito */
`;

const Carrito = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <CarritoContainer>
      <h2>Tu Carrito</h2>
      {cart.items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cart.items.map(item => (
            <Item key={item.id}>
              <img src={item.image} alt={item.name} width="50" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <button onClick={() => handleRemove(item.id)}>Eliminar</button>
            </Item>
          ))}
          <h3>Total: ${cart.total}</h3>
          <Link to="/checkout">
            <button>Proceder al Pago</button>
          </Link>
        </>
      )}
    </CarritoContainer>
  );
};

export default Carrito;
