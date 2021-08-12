import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import {Button} from '@material-ui/core';

const CollapseWrapper = styled(animated.div)`
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1300;
  box-shadow: 0 8px 10px -10px black;
  background: #ffff
`;

const NavLinks = styled.ul`
  list-style-type: none;
  // padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.5rem;
    line-height: 2;
    // color: #ffff;
    color: rgba(28, 29, 32, 0.801546);
    text-decoration: none;
    cursor: pointer;
    & p {
      margin: 1rem 2rem;
    }
    & button{
      margin: 1rem 2rem;
    }
    & :hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;

const Hr = styled.hr`
  margin: 0 2rem;
  color: #ffffff;
`;

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <NavLink
              exact
              to='/'
              activeClassName='active'
              onClick={props.handleNavbar}
            >
              <div>
                <p>Kategori</p>
              </div>
            </NavLink>
          </li>
          <Hr />
          <li>
            <Link to='/' onClick={props.handleNavbar}>
              <div>
                <p>Mitra</p>
              </div>
            </Link>
          </li>
          <Hr />
          <li>
            <NavLink
              to='/cara-pesan'
              activeClassName='active'
              onClick={props.handleNavbar}
            >
              <div>
                <p>Tentang</p>
              </div>
            </NavLink>
          </li>
          <Hr />
          <li>
            <NavLink
              to='/about'
              activeClassName='active'
              onClick={props.handleNavbar}
            >
              <div>
                <p>Blog</p>
              </div>
            </NavLink>
          </li>
          <Hr />
          <li>
          <div style={{padding: "1rem 0", justifyConten: "center", margin: "0 1rem", alignItems: "center"}}>
          <a href="/">
              <Button
                variant='outlined'
                size="large"
                style={{
                  borderRadius: '7px',
                  border: "0.5px solid rgba(28, 29, 32, 0.203589)",
                  fontFamily: "Montserrat",
                  padding: '.5rem 2rem',
                  color: `rgba(28, 29, 32, 0.801546)`,
                  boxShadow: "0px 5px 5px rgba(28, 29, 32, 0.0485686)",
                  margin: "0 1rem",
                  textTransform: "capitalize"
                }}
              >
                Masuk
              </Button>
            </a>
            <a href="/">
              <Button
                variant='contained'
                size="large"
                style={{
                  backgroundColor: '#0872C7',
                  borderRadius: '7px',
                  fontFamily: "Montserrat",
                  color: '#ffff',
                  padding: '.5rem 2rem',
                  margin: "0 1rem",
                  textTransform: "capitalize",
                  boxShadow: "none"
                }}
              >
                Daftar
              </Button>
              </a>
              </div>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;
