// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
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
