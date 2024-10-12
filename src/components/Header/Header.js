import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/userSlice';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'; 
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  CartIcon,
  UserMenu,
  UserIcon,
  DropdownContent
} from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const user = useSelector(state => state.user.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <Link to="/">MiEcommerce</Link>
        </Logo>
        <NavLinks>
          <Link to="/">Inicio</Link>
          <Link to="/carrito">
            <CartIcon>
              <FaShoppingCart />
              {cart.items.length > 0 && <span>{cart.items.length}</span>}
            </CartIcon>
          </Link>
          {isAuthenticated ? (
            <UserMenu>
              <UserIcon onClick={() => setDropdownOpen(!dropdownOpen)} />
              <DropdownContent open={dropdownOpen}>
                <Link to="/perfil">Perfil</Link>
                <button onClick={handleLogout}>Cerrar Sesión</button>
              </DropdownContent>
            </UserMenu>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/registro">Registro</Link>
            </>
          )}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
