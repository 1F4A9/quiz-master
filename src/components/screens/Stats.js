import React from 'react';
import styled from 'styled-components';

import { result$ } from '../observable/store';

const Container = styled.main`
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
  padding: 0.75rem;

  display: flex;
  justify-content: center;

  h4 {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
`;

export default function Stats() {
  const {gamesPlayed, correctAnswers, incorrectAnswers} = result$.value;
  let percentage = null;

  if (gamesPlayed === 0) {
    percentage = <p>0%</p>
  } else {
    percentage = <p>{Math.round(correctAnswers / (correctAnswers + incorrectAnswers) * 100) + '%'}</p>
  }

  return (
    <Container>
      <div className="flex-container" tabindex="0" role="textbox">
        <h4>Games played</h4>
        <p>{gamesPlayed}</p>
        <h4>Correct answers</h4>
        <p>{correctAnswers}</p>
        <h4>Incorrect answers</h4>
        <p>{incorrectAnswers}</p>
        <h4>Correct percentage</h4>
        {percentage}
      </div>
    </Container>
  )
}