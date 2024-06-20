import React from 'react';
import { HeaderContainer, HeaderContent, Logo, Nav, NavLink } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>FaustoFlix</Logo>
        <Nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contato">Contato</NavLink></li>
          </ul>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
