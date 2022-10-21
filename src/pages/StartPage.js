import React from 'react'
import { Link } from 'react-router-dom'

export default function StartPage() {
  return (
    <div className='start-page'>
        <h3 className='quizzical'>Quizzical</h3>
        <p className='welcome'>Welocme to the Quizzical game, press Start Quiz to start the game</p>
        <Link to="/quiz"><button className='start-button'>Start Quiz</button></Link>
    </div>
  )
}
