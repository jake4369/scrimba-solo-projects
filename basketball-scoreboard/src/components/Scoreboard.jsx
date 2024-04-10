import { useState } from "react";

const Scoreboard = ({ title, teamName }) => {
  const [score, setScore] = useState(0);
  return (
    <div className="scoreboard">
      <span className="title">{title}</span>

      <span className="team-name">{teamName}</span>

      <div className="score-container">
        <span className="score">{score}</span>
      </div>

      <div className="btn-container">
        <button
          className="score-btn"
          onClick={() => setScore((score) => (score += 1))}
        >
          +1
        </button>
        <button
          className="score-btn"
          onClick={() => setScore((score) => (score += 2))}
        >
          +2
        </button>
        <button
          className="score-btn"
          onClick={() => setScore((score) => (score += 3))}
        >
          +3
        </button>
      </div>
    </div>
  );
};

export default Scoreboard;
