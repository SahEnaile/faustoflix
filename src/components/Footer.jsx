import React from 'react';
import { FooterContainer, FooterContent, FooterLinks,} from './styles';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Contato">Contato</Link></li>
          </ul>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
