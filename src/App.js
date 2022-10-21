import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './StartPage.css'
import './QuizPage.css';
import './Answer.css'
import './Question.css'
import StartPage from './pages/StartPage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
