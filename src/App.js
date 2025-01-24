import React, { useState } from 'react';
import { questions } from './data/questions';
import QuizQuestion from './components/QuizQuestion';
import ResultPage from './components/ResultPage';
import './App.css';

// Import background image
import quizBackground from './assets/images/backgrounds/paper.jpg';

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [houseScores, setHouseScores] = useState({
        "Gryffindor": 0,
        "Ravenclaw": 0,
        "Hufflepuff": 0,
        "Slytherin": 0
    });
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (houses) => {
        const newScores = {...houseScores};
        houses.forEach(house => {
            newScores[house]++;
        });

        setHouseScores(newScores);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            determineHouse(newScores);
        }
    };

    const determineHouse = (scores) => {
        const sortedHouses = Object.entries(scores)
            .sort((a, b) => b[1] - a[1]);
        
        const topHouse = sortedHouses[0][0];
        setQuizCompleted(topHouse);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setHouseScores({
            "Gryffindor": 0,
            "Ravenclaw": 0,
            "Hufflepuff": 0,
            "Slytherin": 0
        });
        setQuizCompleted(false);
    };

    if (quizCompleted) {
        return <ResultPage house={quizCompleted} onRestart={restartQuiz} />;
    }

    return (
        <div 
            className="App" 
            style={{ 
                backgroundImage: `url(${quizBackground})` 
            }}
        >
            <div className="quiz-container">
                <h1>The Ultimate Hogwarts House Sorting Quiz</h1>
                <QuizQuestion 
                    question={questions[currentQuestion]} 
                    onAnswer={handleAnswer}
                />
                <div className="quiz-progress">
                    Question {currentQuestion + 1} of {questions.length}
                </div>
                <div className='footer'>
                    <h4>Developed with ♥ by Felicia Nemet</h4>
                </div>
            </div>
        </div>
    );
}

export default App;