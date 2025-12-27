'use client';

import { useState } from 'react';
import { QuizQuestion } from '@/types';
import { Button, Card, CardContent, Progress, CircularProgress, Badge } from '@/components/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowRight, RotateCcw, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuizComponentProps {
  questions: QuizQuestion[];
  title?: string;
}

export function QuizComponent({ questions, title = 'Film Photography Quiz' }: QuizComponentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnswers([...answers, isCorrect]);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsComplete(false);
    setAnswers([]);
  };

  if (isComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    
    let message = '';
    let emoji = '';
    
    if (percentage >= 90) {
      message = 'Excellent! You\'re a film photography expert!';
      emoji = '🏆';
    } else if (percentage >= 70) {
      message = 'Great job! You know your stuff!';
      emoji = '🎉';
    } else if (percentage >= 50) {
      message = 'Good effort! Keep learning!';
      emoji = '📚';
    } else {
      message = 'Keep practicing! Film photography takes time to master.';
      emoji = '💪';
    }

    return (
      <Card className="max-w-2xl mx-auto overflow-hidden">
        <CardContent className="text-center py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 text-5xl">
              {emoji}
            </div>
          </motion.div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Quiz Complete!
          </h2>

          <div className="mb-6">
            <CircularProgress value={score} max={questions.length} size={120} />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            You scored <span className="font-bold text-gray-900 dark:text-white">{score}</span> out of <span className="font-bold text-gray-900 dark:text-white">{questions.length}</span>
          </p>
          
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            {message}
          </p>

          {/* Answer summary */}
          <div className="flex justify-center gap-1 mb-8">
            {answers.map((correct, i) => (
              <div
                key={i}
                className={cn(
                  'w-3 h-3 rounded-full',
                  correct ? 'bg-green-500' : 'bg-red-500'
                )}
              />
            ))}
          </div>

          <Button onClick={handleRestart} size="lg">
            <RotateCcw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto overflow-hidden">
      {/* Progress bar */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <Badge variant="outline">
            {currentQuestion.category}
          </Badge>
        </div>
        <Progress value={progress} max={100} size="sm" />
      </div>

      <CardContent className="p-6">
        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {currentQuestion.question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showResult = selectedAnswer !== null;

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={cn(
                      'w-full p-4 rounded-xl text-left transition-all duration-200',
                      'border-2',
                      !showResult && 'hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-800',
                      !showResult && isSelected && 'border-gray-900 dark:border-white',
                      showResult && isCorrect && 'bg-green-50 dark:bg-green-900/20 border-green-500',
                      showResult && isSelected && !isCorrect && 'bg-red-50 dark:bg-red-900/20 border-red-500',
                      showResult && !isSelected && !isCorrect && 'border-gray-200 dark:border-gray-800 opacity-50'
                    )}
                    whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-center justify-between">
                      <span className={cn(
                        'text-gray-700 dark:text-gray-300',
                        showResult && isCorrect && 'text-green-700 dark:text-green-400',
                        showResult && isSelected && !isCorrect && 'text-red-700 dark:text-red-400'
                      )}>
                        {option}
                      </span>
                      {showResult && isCorrect && (
                        <Check className="w-5 h-5 text-green-500" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 rounded-xl bg-gray-100 dark:bg-gray-800"
                >
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Explanation:</span> {currentQuestion.explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Next button */}
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex justify-end"
          >
            <Button onClick={handleNext} size="lg">
              {currentIndex < questions.length - 1 ? (
                <>
                  Next Question
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  See Results
                  <Trophy className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
