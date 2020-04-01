import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import styled from 'styled-components';

const Container = styled.main`
  max-width: 1080px;
  height: 95vh;
  margin: 0 auto;
  padding: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  button {
    margin: 0 auto;
  
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-size: .875rem;
    color: #6200ee;
    cursor: pointer;
    padding: 0.2rem 0.6rem;

    display: block;

    background-color: #fff;
    border: 1px solid #6200ee;
    border-radius: 4px;

    :hover,
    :focus {
      background-color: rgba(98, 0, 238, 0.05);
    }
`;

export default function Quiz() {
  return (
    <Container>
      <Helmet>
        <title>Quiz Master</title>
      </Helmet>
      <Link to='/quiz'>
        <button>
          START QUIZ
        </button>
      </Link>
    </Container>
  )
}