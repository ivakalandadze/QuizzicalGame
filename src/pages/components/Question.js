import React from 'react'
import Answer from "./Answer.js"

export default function Question(props) {
    const answerElements = props.answers.map(answer=>(
        <Answer 
          id={props.id} 
          answer={answer} 
          choosenAnswer={props.choosenAnswer} 
          chooseAnswer={props.chooseAnswer}
          state={props.state}
          correctAnswer={props.question.correct_answer}
        />
    ))
  return (
    <div className='question-box'>
        <h4 className='question'>{props.question.question}</h4>
        <div className='answers-box'>{answerElements}</div>
    </div>
  )
}
