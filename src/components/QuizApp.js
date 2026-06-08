import { useState } from "react";
import Question from "./Question";
import Result from "./Result";

function QuizApp() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet?",
      options: ["Mars", "Earth", "Jupiter", "Venus"],
      answer: "Jupiter",
    },
    {
      question: "2 + 2 = ?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <div className="quiz-container">
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result
          score={score}
          total={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default QuizApp;