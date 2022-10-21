import React from 'react'

export default function Answer(props) {
  const iva  = (props) => {
    if(props.state==="quiz"){
      if(props.choosenAnswer===props.answer){
        return "choosen-answer"
      }else {
        return "answer"
      }
    }else if(props.state==="check"){
      if(props.answer===props.correctAnswer){
        return "correct-answer"
      }else if(props.choosenAnswer===props.answer){
        return "incorrect-answer"
      }
    }
    
      return "check-answer"
  }

  return (
    <div className='answers-box'>
        <button 
            onClick={()=>props.chooseAnswer(props.answer,props.id)}
            className={iva(props)}
            >
            {props.answer}
        </button>
    </div>
  )
}
//props.choosenAnswer===props.answer ? "choosen-answer" : "answer"