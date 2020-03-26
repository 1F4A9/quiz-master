import React, { useState } from 'react';
import he from 'he';
import styled from 'styled-components';

import QuizFormAnswers from './QuizFormAnswers';

const Container = styled.div`
  .question {
    padding: 0rem 0.75rem;
    padding-bottom: 0.833rem;
  }
  
  .question {
    // border-bottom: 1px solid black;
  }

  p {
    padding-top: 0.833rem;
  }

  form {
    width: 100%;
    height: 100%;
  }

  input[type=submit] {
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-size: .875rem;
    color: #6200ee;
    cursor: pointer;
    margin-left: 0.75rem;
    padding: 0.2rem 0.6rem;

    margin: 0 auto;
    display: block;

    background-color: #fff;
    border: 1px solid #6200ee;
    border-radius: 4px;

    :hover,
    :focus {
      background-color: rgba(98, 0, 238, 0.05);
    }
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
            <p tabIndex="0">
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