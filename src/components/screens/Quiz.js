import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QuizForm from './QuizForm';
import LoadingSpinner from '../shared/LoadingSpinner';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.isLoading ? 'center': 'flex-start'};
  align-items: ${props => props.isLoading ? 'center': 'flex-start'};

  height: ${props => props.isLoading ? '100vh': '100%'};
  width: 100%;
`;

export default function Quiz() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10&category=15')
      .then(blob => blob.data.results)
      .then(questions => setQuestions(questions))
      .catch(error => console.log(error));
  }, [])

  let isLoading = true;
  if (questions.length >= 1) {
    isLoading = false;
  }

  return (
    <Container isLoading={isLoading}>
      {isLoading ? <LoadingSpinner scale={1} /> : <QuizForm questions={questions}/>}
    </Container>
  )
}