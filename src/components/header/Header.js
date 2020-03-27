import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { firstLetterCapital, substringFirstChar } from '../utilities';
import Hamburger from './Hamburger';

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  height: 50px;
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
  background-color: fff;

  .flex-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h2 {
    margin: 0rem 0rem 0rem -0.75rem;
  }
`;

export default function Header() {
  let { pathname } = useLocation();

  if (pathname === '/') {
    pathname = 'Quiz Master';
  } else {
    pathname = firstLetterCapital(substringFirstChar(pathname));
  }

  return (
    <Container>
      <Hamburger/>
      <div className="flex-container">
        <h2 role="heading" tabIndex="0">{pathname}</h2>
      </div>
    </Container>
  )
}