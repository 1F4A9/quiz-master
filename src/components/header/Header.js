// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

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
    margin: 0px 12px;
  }
`;

export default function Header() {
  return (
    <Container>
      <Hamburger/>
      <div className="flex-container">
        <h2>Quiz Master</h2>
      </div>
    </Container>
  )
}
