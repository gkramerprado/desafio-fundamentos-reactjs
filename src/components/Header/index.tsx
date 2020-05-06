import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  pageFrom?: 'home' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  pageFrom,
}: HeaderProps) => (
  <Container size={size} pageFrom={pageFrom}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link to="/">Listagem</Link>
        <Link to="/import">Importar</Link>
        <div className="active-bar" />
      </nav>
    </header>
  </Container>
);

export default Header;
