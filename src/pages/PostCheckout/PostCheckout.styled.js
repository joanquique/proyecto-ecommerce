import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ConfirmacionContainer = styled.div`
  padding: 40px;
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const Message = styled.h2`
  color: ${({ theme }) => theme.colors.success};
  margin-bottom: 20px;
`;

export const Details = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const DetailItem = styled.p`
  margin-bottom: 10px;
  font-size: 1rem;

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProductsList = styled.ul`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ProductItem = styled.li`
  margin-bottom: 5px;
`;

export const Total = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const HomeButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;
