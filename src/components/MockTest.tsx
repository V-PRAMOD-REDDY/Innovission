import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface MockTestProps {
  title: string;
  description: string;
  duration: number; // in minutes
  questions: Question[];
  onComplete: (score: number) => void;
}

const MockTest: React.FC<MockTestProps> = ({
  title,
  description,
  duration,
  questions,
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    if (!isSubmitted) {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = answerIndex;
      setAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    setScore(finalScore);
    setIsSubmitted(true);
    onComplete(finalScore);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="flex items-center text-gray-600">
            <Timer className="h-5 w-5 mr-2" />
            <span className="font-medium">{formatTime(timeLeft)}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>

        {!isSubmitted ? (
          <div className="space-y-8">
            <div className="p-4 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-600">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>

            <div>
              <p className="text-lg font-medium mb-4">{questions[currentQuestion].question}</p>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors ${
                      answers[currentQuestion] === index
                        ? 'bg-primary-50 border-primary-500'
                        : 'hover:bg-gray-50 border-gray-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value={index}
                      checked={answers[currentQuestion] === index}
                      onChange={() => handleAnswer(currentQuestion, index)}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-3">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="btn btn-outline"
              >
                Previous
              </button>
              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestion((prev) => Math.min(questions.length - 1, prev + 1))}
                  className="btn btn-primary"
                >
                  Next
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn btn-primary">
                  Submit Test
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-green-100 text-green-600 mb-6">
              <CheckCircle className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Test Completed!</h3>
            <p className="text-gray-600 mb-6">Your score: {score}%</p>
            <div className="flex justify-center">
              <button onClick={() => window.location.reload()} className="btn btn-primary">
                Take Another Test
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockTest;