import React, { useEffect, useState } from 'react';
 // Ensure you have a CSS file for styling

const rulesText = [
 "Questions are asked one by one from each team.",
  "Each question has 20 seconds to answer.",
  "Answering correctly gives 1 score.",
  "A team answering 2 wrong answers will be out.",
  "No audience help is allowed.",
  
  "Audience is not allowed to say the answer loudly."
];

const Rules = ({ onStartQuiz, onBackToWelcome }) => {
  const [displayedRules, setDisplayedRules] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayedRules.length < rulesText.length) {
        setDisplayedRules((prev) => [...prev, rulesText[displayedRules.length]]);
      }
    }, 1000); // Change this delay to control when the next rule appears

    return () => clearTimeout(timer);
  }, [displayedRules]);

  return (
    <div className="rules-container">
      <video autoPlay muted loop className="bg-video">
        <source src="/assets/bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contents">
        
        <h1>Quiz Rules:</h1>
        <div className="rules-list">
          {displayedRules.map((rule, index) => (
            <p key={index} className="fade-in">{rule}</p>
          ))}
        </div>
        <button onClick={onStartQuiz} className="start-quiz-button">Start Quiz</button>
        <button onClick={onBackToWelcome} className="back-button">Back</button>
      </div>
    </div>
  );
};

export default Rules;
