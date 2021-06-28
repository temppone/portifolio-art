import React from 'react';
import { FooterContainer, FooterContent } from './Footer.styled';
import { Instagram, Mail, WhatsApp } from '@material-ui/icons';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>&copy; 2021 todos direitos reservados</FooterContent>
      <FooterContent>
        <ul>
          <li>
            <a href="">
              <WhatsApp />
            </a>
          </li>
          <li>
            <a href="">
              <Mail />
            </a>
          </li>
          <li>
            <a href="">
              <Instagram />
            </a>
          </li>
        </ul>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
