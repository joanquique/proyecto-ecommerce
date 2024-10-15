import React from 'react';
import { FooterContainer, FooterContent, FooterLinks } from './Footer.styled';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
        </FooterLinks>
        <p>&copy; {new Date().getFullYear()} Tienda en Línea. Todos los derechos reservados.</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
