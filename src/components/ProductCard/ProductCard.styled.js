import styled, { keyframes } from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

export const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  position: relative;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  max-height: 150px;
  object-fit: contain;
  width: 100%;
  transition: opacity 0.3s ease;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    transform: translateY(-2px);
  }
`;

export const Notification = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  padding: 5px 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  animation: fadeInOut 2s forwards;

  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(-10px); }
    10% { opacity: 1; transform: translateY(0); }
    90% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-10px); }
  }

  svg {
    margin-right: 5px;
  }
`;
