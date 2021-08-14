import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

const Brand = () => {
  return (
    <Link to='/'>
      {' '}
      {/* Logo */}
      <Image src={logo} alt='logo' />
    </Link>
  );
};

export default Brand;

const Image = styled.img`
  height: 2rem;
  margin: 1.5rem 0;
`;
