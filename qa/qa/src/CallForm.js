// src/CallForm.js
import React, { useState } from 'react';
const CallForm = () => {
  const [scores, setScores] = useState({
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
    question5: 0,
    question6: 0,
    question7: 0,
    question8: 0,
    question9: 0,
    question10: 0,
  });

  const [totalScore, setTotalScore] = useState(0);

  const handleScoreChange = (question, score) => {
    setScores((prevScores) => ({
      ...prevScores,
      [question]: score,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate total score
    const total = Object.values(scores).reduce((acc, score) => acc + score, 0);
    setTotalScore(total);
    // Do something with the scores (e.g., save to database, send to server)
    console.log('Scores submitted:', scores);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question 1: How well did the agent address the customer's issue?</label>
          <div>
            <label>
              <input
                type="radio"
                name="question1"
                value={0}
                checked={scores.question1 === 0}
                onChange={() => handleScoreChange('question1', 0)}
              /> 0
            </label>
            <label>
              <input
                type="radio"
                name="question1"
                value={5}
                checked={scores.question1 === 5}
                onChange={() => handleScoreChange('question1', 5)}
              /> 5
            </label>
            <label>
              <input
                type="radio"
                name="question1"
                value={10}
                checked={scores.question1 === 10}
                onChange={() => handleScoreChange('question1', 10)}
              /> 10
            </label>
          </div>
        </div>
        <div>
          <label>Question 2: How well did the agent address the customer's issue?</label>
          <div>
            <label>
              <input
                type="radio"
                name="question2"
                value={0}
                checked={scores.question2 === 0}
                onChange={() => handleScoreChange('question2', 0)}
              /> 0
            </label>
            <label>
              <input
                type="radio"
                name="question2"
                value={5}
                checked={scores.question2 === 5}
                onChange={() => handleScoreChange('question2', 5)}
              /> 5
            </label>
            <label>
              <input
                type="radio"
                name="question2"
                value={10}
                checked={scores.question2 === 10}
                onChange={() => handleScoreChange('question2', 10)}
              /> 10
            </label>
          </div>
        </div>
        <div>
          <label>Question 3: How well did the agent address the customer's issue?</label>
          <div>
            <label>
              <input
                type="radio"
                name="question3"
                value={0}
                checked={scores.question3 === 0}
                onChange={() => handleScoreChange('question3', 0)}
              /> 0
            </label>
            <label>
              <input
                type="radio"
                name="question3"
                value={5}
                checked={scores.question3 === 5}
                onChange={() => handleScoreChange('question3', 5)}
              /> 5
            </label>
            <label>
              <input
                type="radio"
                name="question3"
                value={10}
                checked={scores.question3 === 10}
                onChange={() => handleScoreChange('question3', 10)}
              /> 10
            </label>
          </div>
        </div>
        <div>
          <label>Question 4: How well did the agent address the customer's issue?</label>
          <div>
            <label>
              <input
                type="radio"
                name="question4"
                value={0}
                checked={scores.question4 === 0}
                onChange={() => handleScoreChange('question4', 0)}
              /> 0
            </label>
            <label>
              <input
                type="radio"
                name="question4"
                value={5}
                checked={scores.question4 === 5}
                onChange={() => handleScoreChange('question4', 5)}
              /> 5
            </label>
            <label>
              <input
                type="radio"
                name="question4"
                value={10}
                checked={scores.question4 === 10}
                onChange={() => handleScoreChange('question4', 10)}
              /> 10
            </label>
          </div>
        </div>
        

        

        {/* Repeat similar structure for other questions */}

        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Total Score: {totalScore}</h2>
      </div>
    </div>
  );
};

export default CallForm;
