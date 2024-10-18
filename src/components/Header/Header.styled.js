import styled from 'styled-components';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #333;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;  // Asegura que los elementos estén distribuidos
  align-items: center;
  padding: 10px 20px;
  position: relative;  

  /* Asegura que todos los elementos tengan su espacio correcto */
  @media (max-width: 768px) {
    justify-content: flex-start;  
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};

  a {
    font-weight: bold;
    font-family: Arial, serif;
    text-decoration: none;
    color: #1771e6;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;  // Empuja los links y el carrito a la derecha en escritorio
  
  a {
    margin-right: 20px;  // Espacio entre los links
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 768px) {
    display: none;  // Oculta los links en pantallas móviles
  }
`;


export const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: auto;  // Empuja el carrito a la derecha
  font-size: 28px;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.primary};

  span {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 5px 8px;
    font-size: 12px;
  }
`;

export const UserMenu = styled.div`
  position: relative;
  display: inline-block;
`;

export const UserIcon = styled(FaUserCircle)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const DropdownContent = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 10px 0;
  z-index: 1;
  border-radius: 4px;

  a, button {
    color: ${({ theme }) => theme.colors.dark};
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.light};
    }

    svg {
      margin-left: 8px;  /* Ajusta el espaciado entre el texto y el ícono */
      font-size: 18px;    /* Tamaño del ícono */
    }
  }
`;

export const MobileNavLinks = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')}; /* Mostrar u ocultar */
  position: absolute;
  top: 60px;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  width: 200px;
  padding: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 999;
  
  a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.light};
    }
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 30px;
  margin-left: auto;  // Empuja el ícono a la derecha
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    display: block;
  }
`;

export const LogoutButton = styled.button`
  display: ${({ isAuthenticated }) => (isAuthenticated ? 'flex' : 'none')};
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark}; 

  &:hover {
    background-color: ${({ theme }) => theme.colors.light}; // Cambia el color al pasar el mouse
  }

  svg {
    margin-left: 5px; // Ajusta el margen si es necesario
  }
`;
