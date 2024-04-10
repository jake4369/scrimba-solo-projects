import { useState } from "react";

const Scoreboard = ({ title, teamName }) => {
  const [score, setScore] = useState(0);

  // Create an array of button elements
  const buttons = Array.from([1, 2, 3], (x) => (
    <button
      className="score-btn"
      onClick={() => setScore((score) => (score += x))}
    >
      +{x}
    </button>
  ));

  return (
    <div className="scoreboard">
      <span className="title">{title}</span>

      <span className="team-name">{teamName}</span>

      <div className="score-container">
        <span className="score">{score}</span>
      </div>

      <div className="btn-container">{buttons}</div>
    </div>
  );
};

export default Scoreboard;
