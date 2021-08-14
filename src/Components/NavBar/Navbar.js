/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { NavLink } from 'react-router-dom';
import Brand from './Brand';
import Burgermenu from './Burgermenu';
import CollapseMenu from './CollapseMenu';
import basket from '../../Images/basket.svg';
import { Button } from '@material-ui/core';
import lup from '../../Images/loupe.svg';

const NavBar = styled(animated.div)`
  // position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  font-size: 1rem;
  // box-shadow: 0 0 40px rgb(0 0 0 / 10%);
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    // color: #dfe6e9;
    color: rgba(28, 29, 32, 0.801546);
    font-weight: 500;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: rgba(28, 29, 32, 1);
      // border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 1100px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 1100px) {
    display: none;
  }
`;

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'trasnlate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          {/* Logo */}
          <Brand />

          {/* Seatch bar */}
          <div>
            <input
              id='nama'
              placeholder='Cari Kursus'
              variant='outlined'
              color='primary'
              type='text'
              style={{
                margin: '1rem 0',
                height: '3rem',
                width: '16rem',
                border: '3px solid rgba(81, 96, 140, 0.0992406)',
                borderRadius: '7px',
                padding: '1rem 3rem 1rem 1rem',
                fontFamily: 'Montserrat',
                color: 'rgba(28, 29, 32, 0.500437)',
              }}
            />
            <img
              src={lup}
              alt='lup'
              style={{
                position: 'absolute',
                bottom: '35%',
                height: '1.5rem',
                justifyConten: 'center',
                marginLeft: '-3rem',
                marginTop: '1rem',
              }}
            />
          </div>

          {/* Navigation */}
          <NavLinks style={linkAnimation}>
            <a href='/'></a>
            <NavLink exact to='/' activeClassName='active'>
              Kategori
            </NavLink>
            <NavLink to='/' activeClassName='active'>
              Mitra
            </NavLink>
            <NavLink to='/' activeClassName='active'>
              Tentang
            </NavLink>
            <NavLink to='/' activeClassName='active'>
              Blog
            </NavLink>
            <NavLink to='/' activeClassName='active'>
              <img src={basket} alt='basket' />
            </NavLink>

            <span
              style={{
                borderLeft: '1px solid rgba(28, 29, 32, 0.105114)',
                margin: '0 1.5rem 0 .5rem',
              }}
            ></span>

            {/* Button */}
            <a href='/' style={{ margin: 0 }}>
              <Button
                variant='outlined'
                style={{
                  borderRadius: '7px',
                  border: '0.5px solid rgba(28, 29, 32, 0.203589)',
                  fontFamily: 'Montserrat',
                  padding: '.5rem 2rem',
                  color: `rgba(28, 29, 32, 0.801546)`,
                  boxShadow: '0px 5px 5px rgba(28, 29, 32, 0.0485686)',
                  margin: '0 .5rem',
                  textTransform: 'capitalize',
                }}
              >
                Masuk
              </Button>
            </a>
            <a href='/' style={{ margin: 0 }}>
              <Button
                variant='contained'
                style={{
                  backgroundColor: '#0872C7',
                  borderRadius: '7px',
                  fontFamily: 'Montserrat',
                  color: '#ffff',
                  padding: '.5rem 2rem',
                  margin: '0 .5rem',
                  textTransform: 'capitalize',
                  boxShadow: 'none',
                }}
              >
                Daftar
              </Button>
            </a>
          </NavLinks>
          <BurgerWrapper>
            <Burgermenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};
export default Navbar;
