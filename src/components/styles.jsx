import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const HeaderContainer = styled.header`
  color: #fff;
  padding: 10px 0;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h3`
   background: -webkit-linear-gradient(45deg, #f24f00, #f24f00, #ffa540);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;

    li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f24f00;
  }
`;

export const FooterContainer = styled.footer`
  color: #fff;
  padding: 20px 0;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FooterLinks = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;

    li {
      // Use Link em vez de a
      ${Link} {
        color: #fff;
        text-decoration: none;
        transition: all 0.3s ease;
      a {
        color: #fff;
        text-decoration: none;
        padding: 10px 15px;
        transition: all 0.3s ease;
        &:hover {
           color: #f24f00;
         }
      }
        
    }
  }
`;
