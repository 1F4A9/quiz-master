import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import he from 'he';

import { shuffle } from '../utilities';

export default function QuizFormAnswers({ value, question, currentQuestion, onChange }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const { incorrect_answers, correct_answer } = question;

    
    setAnswers([correct_answer, ...incorrect_answers]);
    // setAnswers(shuffle([correct_answer, ...incorrect_answers]));
  }, [question])

  return (
    <>
      {answers.map((answer, index) => {
        return (
          <div key={uniqid()}>
            <input 
              type="radio" 
              onChange={onChange}
              checked={value['Q' + currentQuestion] === he.decode(answer)}
              value={he.decode(answer)}
              id={`answer-${index + 1}`} 
              name={`Q${currentQuestion}`} 
            />
            <label htmlFor={`answer-${index + 1}`}>
              {he.decode(answer)}
            </label>
          </div>
        )
      })}
    </>
  )
}