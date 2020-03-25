import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.main`
  height: 40px;
  width: 120px;
  position: absolute;
  left: 50%;
  margin-left: -60px;
  top: 50%;
  margin-top: -20px;

  button {
    width: 100%;
    height: 100%;
  }
`;

export default function Quiz() {
  return (
    <Container>
      <Link to='/quiz'>
        <button>
          START QUIZ
        </button>
      </Link>
    </Container>
  )
}