import React, { useEffect, useState } from 'react';
import he from 'he';
import styled from 'styled-components';

import { shuffle } from '../utilities';

const Container = styled.div`
  input[type=radio] {
    height: 0;
    width: 0;
    opacity: 0;
  }

  input[type=radio]:focus ~ .radio::before,
  .radio:hover::before {
    background-color: rgba(98, 0, 238, 0.1);
  }

  input[type=radio]:checked ~ .radio > .inner-circle {
    transform: scale(0.5, 0.5);
  }

  input[type=radio]:checked ~ .radio > .outer-circle {
    border-color: #6200ee;
  }

  .radio {
    position: relative;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 12px;
    margin-bottom: 12px;

    ::before {
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      left: 50%;
      margin-left: -20px;
      top: 50%;
      margin-top: -20px;
      border-radius: 50%;
      background-color: transparent;
    }
  }

  .outer-circle {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #757575;
  }

  .inner-circle {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #6200ee;
    transform: scale(0, 0);
    transition: transform 0.1s linear;
  }

  label {
    display: flex;
    flex-direction: row;
  }
`;

export default function QuizFormAnswers({ value, question, currentQuestion, onChange }) {
  const [answers, setAnswers] = useState([]);
  
  useEffect(() => {
    const { incorrect_answers, correct_answer } = question;
    
    setAnswers(shuffle([correct_answer, ...incorrect_answers]));
  }, [question])
  
  return (
    <>
      {answers.map((answer, index) => {
        return (
          <Container>
            <label htmlFor={he.decode(answer)}>
              <input 
                type="radio" 
                onChange={onChange}
                checked={value['Q' + currentQuestion] === he.decode(answer)}
                value={he.decode(answer)}
                id={he.decode(answer)} 
                name={`Q${currentQuestion}`}
              />
              <div className="radio">
                <div className="outer-circle"></div>
                <div className="inner-circle"></div>
              </div>
              {he.decode(answer)}
            </label>
          </ Container>
        )
      })}
    </>
  )
} 