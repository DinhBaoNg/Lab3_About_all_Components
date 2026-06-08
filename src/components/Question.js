function Question({ question, questionNumber, totalQuestions, handleAnswer }) {
  const progressPercent = (questionNumber / totalQuestions) * 100;

  return (
    <div className="quiz-card">
      <div className="quiz-progress">
        <div className="progress-header">
          <span>Question {questionNumber} of {totalQuestions}</span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      <h2 className="quiz-question-title">{question.question}</h2>

      <div className="options-list">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => handleAnswer(option)}
          >
            <span>{option}</span>
            <span style={{ opacity: 0.3 }}>➔</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;