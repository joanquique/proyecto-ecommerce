import styled from 'styled-components';
import bannerImage from '../../assets/banner.jpg'; // Asegúrate de tener una imagen de banner en esta ruta

export const BannerContainer = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 40px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 200px;
  }
`;

export const BannerText = styled.h2`
  position: absolute;
  bottom: 20px;
  left: 40px;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 20px;
    font-size: 1rem;
  }
`;
