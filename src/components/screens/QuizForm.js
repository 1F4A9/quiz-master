import React, { useState } from 'react';
import he from 'he';
import styled from 'styled-components';

import QuizFormAnswers from './QuizFormAnswers';

const Container = styled.div`
  .question {
    padding: 0rem 0.75rem;
    padding-bottom: 0.833rem;

    input {
      pmargin-left: 0.75rem;
    }
  }
  
  .question:last-child {
  }

  p {
    padding-top: 0.833rem;
  }
`;

export default function QuizForm({ questions, handleSubmit }) {
  const [value, setValue] = useState({});

  function onSubmit(e) {
    e.preventDefault();

    let result = questions.filter((question, i) => he.decode(question.correct_answer) === value['Q' + (i + 1)]);

    handleSubmit(result);
  }

  function onChange(e) {
    setValue({...value, ...{[e.target.name]: e.target.value}});
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        {questions.map((question, index) => {
          return <div className="question" key={index}>
            <p>
              {`Q${index + 1}. `}
              {he.decode(question.question)}
            </p>
            <QuizFormAnswers 
              value={value} 
              question={question} 
              currentQuestion={index + 1} 
              onChange={onChange}
            />
          </div>
        })}
        <input type="submit" value="Submit"/>
      </form>
    </Container>
  )
}