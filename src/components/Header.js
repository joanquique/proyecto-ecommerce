import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderContainer = styled.header`
  /* Estilos para el header */
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  /* Responsivo */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Nav = styled.nav`
  /* Estilos para la navegación */
`;

const Header = () => {
  const cart = useSelector(state => state.cart);

  return (
    <HeaderContainer>
      <h1><Link to="/">MiEcommerce</Link></h1>
      <Nav>
        <Link to="/">Inicio</Link>
        <Link to="/carrito">Carrito ({cart.items.length})</Link>
        <Link to="/login">Login</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
