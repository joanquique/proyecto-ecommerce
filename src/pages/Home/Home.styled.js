import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 40px;
  min-height: calc(100vh - 160px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Verdana", Arial, Sans-serif;
  font-size: 26px;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Select = styled.select`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 18px;
  font-size: 1rem;
  flex: 1;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 18px;
  font-size: 1rem;
  flex: 2;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }
`;

export const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.dark};
`;
