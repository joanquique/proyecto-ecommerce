import styled from 'styled-components';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

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
  justify-content: space-between;
  align-items: center;
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

export const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    font-family: Arial, serif;
    color: #1771e6;;
    font-weight: 500;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 10px;
    font-size: 0.9rem;
  }
`;

export const CartIcon = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;

  span {
    position: absolute;
    top: -8px;
    right: -10px;
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
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
  }
`;
