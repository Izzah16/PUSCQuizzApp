import React, { useState } from 'react';

const Welcome = ({ onStartQuiz, onShowRules }) => {
    const [audio] = useState(new Audio('/assets/START.mp3'));

    const handleStartQuiz = () => {
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
        onStartQuiz();
    };

    const handleShowRules = () => {
        audio.play().catch((error) => {
            console.error("Audio play failed:", error);
        });
        onShowRules();
    };

    return (
        <div className="welcome-container">
            <video autoPlay muted loop className="bg-video">
                <source src="/assets/bg1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="contents">
                <img src="/assets/logo.png" alt="Logo" className="logo" />
                <h1 className="header-text">WELCOME TO PUSC QUIZ COMPETITION ON SEERAT-UN-NABI ﷺ</h1>
                <p>ORGANIZED BY SCHOOL OF CHEMISTRY</p>
                <button onClick={handleStartQuiz} className="start-quiz-button">START QUIZ</button>
                <button onClick={handleShowRules} className="show-rules-button">SHOW RULES</button>
            </div>
        </div>
    );
};

export default Welcome;
