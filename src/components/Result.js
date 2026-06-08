function Result({ score, total, restartQuiz }) {
  const percentage = Math.round((score / total) * 100);
  
  let feedback = "Excellent! You have a great knowledge!";
  if (percentage < 50) {
    feedback = "Keep practicing! You can do better next time.";
  } else if (percentage < 80) {
    feedback = "Well done! You have a good score.";
  }

  return (
    <div className="quiz-card result-card">
      <h1>Quiz Completed!</h1>
      
      <div className="score-circle">
        <span className="score-number">{score}/{total}</span>
        <span className="score-label">{percentage}% Score</span>
      </div>

      <p className="result-feedback">{feedback}</p>

      <button className="restart-btn" onClick={restartQuiz}>
        Play Again
      </button>
    </div>
  );
}

export default Result;