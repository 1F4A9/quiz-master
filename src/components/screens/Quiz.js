import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import QuizForm from './QuizForm';
import LoadingSpinner from '../shared/LoadingSpinner';
import ModalDialog from '../modals/ModalDialog';
import { updateLocalStorage, result$ } from '../observable/store';
import { fetchQuestions } from '../api/'

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
  const [openModal, setOpenModal] = useState(false);
  const [currentResult, setCurrentResult] = useState(false);

  useEffect(() => {
    fetchQuestions()
      .then(questions => setQuestions(questions));
  }, [])

  function handleSubmit(res) {
    let newResult = {...result$.value};
    newResult.gamesPlayed++;
    newResult.correctAnswers += res.length;
    newResult.incorrectAnswers += 10 - res.length;

    setCurrentResult(res.length);
    updateLocalStorage(newResult);
    handleModal(true);
  }
  
  function handleModal(boolean) {
    setOpenModal(boolean);
  }

  function handleRestart() {
    fetchQuestions()
      .then(questions => setQuestions(questions));
  }

  let isLoading = true;
  if (questions.length >= 1) {
    isLoading = false;
  }

  return (
    <Container isLoading={isLoading}>
      {isLoading ? <LoadingSpinner scale={1} /> : <QuizForm questions={questions} handleSubmit={handleSubmit}/>}
      {openModal ? <ModalDialog handleModal={handleModal} currentResult={currentResult} handleRestart={handleRestart}/> : null}
    </Container>
  )
}