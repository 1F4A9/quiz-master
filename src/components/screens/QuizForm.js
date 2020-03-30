import React, { useState } from 'react';
import he from 'he';
import styled from 'styled-components';

import QuizFormAnswers from './QuizFormAnswers';

const Container = styled.div`
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;

  .question {
    padding: 0rem 0.75rem;
    padding-bottom: 0.833rem;
  }

  form > div {
    border-bottom: 1px solid #e4e4e4;
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
    padding: 0.2rem 0.6rem;

    margin: 1.666rem auto 0rem auto;
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

    setValue({})
  }

  function onChange(e) {
    setValue({...value, ...{[e.target.name]: e.target.value}});
  }

  return (
    <Container>
      <form onSubmit={onSubmit} aria-label="10 questions and a submit button">
        {questions.map((question, index) => {
          return <div className="question" key={index} tabIndex="0" role="textbox">
            <p id="Q">
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