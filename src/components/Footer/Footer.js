import React from 'react';
import { FooterContainer, FooterContent, FooterLinks } from './Footer.styled';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <Link to="/about">Sobre Nosotros</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/terms">Términos y Condiciones</Link>
        </FooterLinks>
        <p>&copy; {new Date().getFullYear()} MiEcommerce. Todos los derechos reservados.</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
