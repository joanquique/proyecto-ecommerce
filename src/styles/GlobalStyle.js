import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilos globales */
  body {
    font-family: 'Arial, sans-serif';
    background-color: #f5f5f5;
  }

  /* Más estilos globales según necesidad */
`;

export default GlobalStyle;
