// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0px 12px;

  i {
    color: hsla(0,0%,0%,0.8);
    cursor: pointer;
  }
`;

export default function Hamburger() {
  return (
    <Container>
      <i className="fas fa-bars"></i>
    </Container>
  )
}
