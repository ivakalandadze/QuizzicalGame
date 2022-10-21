import React, {useState, useEffect} from 'react'
import Question from "./components/Question.js"


export default function QuizPage() {
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [siteState, setSiteState] = useState({
        state: "quiz",
        counter: 0
    })


    useEffect(()=>{
        if(siteState.state==="quiz"){
            getQuestions().
            then(results=>{
                const questionsArray = []
                results.results.map(question=>{
                    const answers = shuffle([...question.incorrect_answers, question.correct_answer]).sort().reverse()
                    questionsArray.push({
                        question,
                        answers: answers,
                        choosenAnswer: "",
                        correct: false
                    })
                    setQuizQuestions(questionsArray)
                })
            })
        }
    },[siteState.state])

    useEffect(()=>{
        let counter = 0;
        quizQuestions.forEach(question=>{
            if(question.question.correct_answer===question.choosenAnswer){
                counter++;
            }
            setSiteState(prevState=>({...prevState, counter: counter}))
        })
    },[siteState.state])

   
    const chooseAnswer = (answer,id) => {
        if(siteState.state==="quiz"){
            setQuizQuestions(prevState=>{
                const prevQuestions = [...prevState]
                prevQuestions[id].choosenAnswer = answer
                return prevQuestions
            })
        }
    }

    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    const getQuestions = async () => {
        const response = await fetch("https://opentdb.com/api.php?amount=5")
        const questions = await response.json()

        return questions
    }

    const questionElements = quizQuestions.map((question,index)=>(
        <Question 
            id={index} 
            chooseAnswer={chooseAnswer} 
            question={question.question} 
            answers={question.answers} 
            choosenAnswer={question.choosenAnswer}
            state={siteState.state}
        />
    ))
  return (
    <div className='quiz-page'>
        
        {quizQuestions ? questionElements : <h4>Loading...</h4>}
        <div>
            {siteState.state==="check" ? 
            <div className='check-answers-box'>
                <h4 className='score'>{`You scored ${siteState.counter}/${quizQuestions.length} correct answers`}</h4>
                <button className="play-again-button"onClick={()=>{setSiteState(prevState=>({...prevState, state: "quiz"}))}}>Play Again</button>
            </div>: 
            <button className="check-button" onClick={()=>{setSiteState(prevState=>({...prevState, state: "check"}))}}>Check Answers</button>}
        </div>
    </div>
  )
}
