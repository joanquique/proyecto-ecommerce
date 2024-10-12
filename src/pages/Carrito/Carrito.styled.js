import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CarritoContainer = styled.div`
  padding: 40px;
  min-height: calc(100vh - 160px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const ItemName = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 10px;
`;

export const ItemPrice = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

export const RemoveButton = styled.button`
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a71d2a;
  }
`;

export const Total = styled.h3`
  text-align: right;
  margin-top: 30px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CheckoutButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.dark};
`;
