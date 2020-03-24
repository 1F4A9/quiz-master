// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';
import he from 'he';
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
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10&category=15')
      .then(blob => blob.data.results)
      .then(questions => setQuestions(questions));
  }, [])

  console.log(questions)


  return (
    <Container>
      {questions.map(data => {
        return <p key={uniqid()}>{he.decode(data.question)}</p>
      })}
    </Container>
  )
}
