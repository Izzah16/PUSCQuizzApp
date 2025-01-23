import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Welcome from './components/Welcome';
import Rules from './components/Rules';
import Footer from './components/Footer';

function App() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [showRules, setShowRules] = useState(false);

    const startQuiz = () => {
        setQuizStarted(true);
        setShowRules(false);
    };

    const handleBackToWelcome = () => {
        setQuizStarted(false);
        setShowRules(false); // Reset when going back to welcome
    };

    const handleShowRules = () => {
        setShowRules(true);
        setQuizStarted(false); // Ensure quiz isn't started when showing rules
    };

    return (
        <div className="App">
            <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', marginBottom: '0px', padding: '0px' }}>
                <h1 style={{ color: 'black', textAlign: 'center', padding: '2px' }}>PUSC QUIZ COMPETITION</h1>
            </div>
            {quizStarted ? (
                <Quiz onBackToWelcome={handleBackToWelcome} />
            ) : showRules ? (
                <Rules onStartQuiz={startQuiz} onBackToWelcome={handleBackToWelcome} />
            ) : (
                <Welcome onStartQuiz={startQuiz} onShowRules={handleShowRules} />
            )}
            <Footer />
        </div>
    );
}

export default App;
