import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/userSlice';
import { FaShoppingCart, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; 
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  MobileNavLinks,
  CartIcon,
  UserMenu,
  UserIcon,
  DropdownContent,
  HamburgerIcon,
  LogoutButton,
} from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <Link to="/">ShopOnline</Link>
        </Logo>

        {/* Hamburger Icon para móviles */}
        {isMobile && (
          <HamburgerIcon onClick={toggleMobileMenu}>☰</HamburgerIcon>
        )}

        {/* Links de escritorio */}
        {!isMobile && (
          <NavLinks>
            <Link to="/">Inicio</Link>
            {isAuthenticated ? (
              <UserMenu>
                <UserIcon onClick={() => setDropdownOpen(!dropdownOpen)} />
                <DropdownContent open={dropdownOpen}>
                  <Link>Perfil</Link>
                  <LogoutButton isAuthenticated={isAuthenticated} onClick={handleLogout}>
                  <FaSignOutAlt /> {/* Ícono de cerrar sesión */}
                  </LogoutButton>
                </DropdownContent>
              </UserMenu>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/registro">Registro</Link>
              </>
            )}
          </NavLinks>
        )}

        {/* Carrito siempre visible */}
        <Link to="/carrito">
          <CartIcon>
            <FaShoppingCart />
            {cart.items.length > 0 && <span>{cart.items.length}</span>}
          </CartIcon>
        </Link>

      </Nav>

      {/* Menu dropdown para móviles */}
      {isMobile && mobileMenuOpen && (
        <MobileNavLinks open={mobileMenuOpen}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
          <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
          <Link to="/registro" onClick={() => setMobileMenuOpen(false)}>Registro</Link>
          <Link>Perfil</Link>
          <Link>
          <LogoutButton isAuthenticated={isAuthenticated} onClick={handleLogout}>
            <FaSignOutAlt /> {/* Ícono de cerrar sesión */}
          </LogoutButton>
          </Link>
        </MobileNavLinks>
      )}

    </HeaderContainer>
  );
};

export default Header;
