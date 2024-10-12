import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px 40px;
  text-align: center;
  margin-top: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
