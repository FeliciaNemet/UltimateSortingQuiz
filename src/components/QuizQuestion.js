import React, { useState } from 'react';
import './QuizQuestion.css';

const QuizQuestion = ({ question, onAnswer }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (option) => {
        setSelectedImage(option.image);
        onAnswer(option.houses);
    };

    return (
        <div className="quiz-question">
            <h2>{question.text}</h2>
            <div className="options">
                {question.options.map((option, index) => (
                    <img 
                        key={index}
                        src={option.image} 
                        alt={`Option ${index + 1}`}
                        className={`image-option ${selectedImage === option.image ? 'selected' : ''}`}
                        onClick={() => handleImageClick(option)}
                    />
                ))}
            </div>
        </div>
    );
};

export default QuizQuestion;