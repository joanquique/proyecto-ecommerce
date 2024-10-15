import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilos globales */
  body {
    font-family: 'Montserrat', Arial, sans-serif;
    background-color: #f5f5f5;
  }
`;

export default GlobalStyle;
