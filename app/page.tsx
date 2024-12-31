'use client';

import { useState, useEffect } from 'react';
import { QuestionCard } from './components/QuestionCard';
import { LevelSelector } from './components/LevelSelector';
import { ThemeToggle } from './components/ThemeToggle';
import questionsData from '../wnrs-questions.json';

type Level = 'Level1_Perception' | 'Level2_Connection' | 'Level3_Reflection';

type Question = {
  id: number;
  text: string;
  textJP: string;
};

export default function Home() {
  const [currentLevel, setCurrentLevel] = useState<Level>('Level1_Perception');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shownQuestionIndices, setShownQuestionIndices] = useState<number[]>([]);

  useEffect(() => {
    setQuestions(questionsData[currentLevel]);
    setCurrentQuestionIndex(getRandomUnshownQuestionIndex([]));
    setShownQuestionIndices([]);
  }, [currentLevel]);

  const getRandomUnshownQuestionIndex = (currentShownIndices: number[]): number => {
    const availableIndices = Array.from(
      { length: questionsData[currentLevel].length },
      (_, i) => i
    ).filter(index => !currentShownIndices.includes(index));

    if (availableIndices.length === 0) return -1;
    const randomIndex = Math.floor(Math.random() * availableIndices.length);
    return availableIndices[randomIndex];
  };

  const handleLevelSelect = (level: Level) => {
    setCurrentLevel(level);
    setShownQuestionIndices([]);
    setIsPlaying(true);
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    const nextIndex = getRandomUnshownQuestionIndex([...shownQuestionIndices, currentQuestionIndex]);
    if (nextIndex !== -1) {
      setShownQuestionIndices(prev => [...prev, currentQuestionIndex]);
      setCurrentQuestionIndex(nextIndex);
    } else {
      setIsPlaying(false);
    }
  };

  const handleBackToLevels = () => {
    setIsPlaying(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 transition-colors p-4">
      <div className="w-full text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">WNRS</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">We&apos;re Not Really Strangers</p>
      </div>

      {!isPlaying ? (
        <LevelSelector 
          currentLevel={currentLevel}
          onLevelSelect={handleLevelSelect}
        />
      ) : (
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <button
              onClick={handleBackToLevels}
              className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 mb-4 flex items-center justify-center gap-2 mx-auto transition-colors"
            >
              ← Back to Levels
            </button>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {currentLevel.replace(/_/g, ' ')}
            </h2>
           
          </div>

          <div className="relative w-full h-[60vh] flex items-center justify-center">
            {questions[currentQuestionIndex] && (
              <QuestionCard
                question={questions[currentQuestionIndex]}
                onSwipe={handleSwipe}
              />
            )}
          </div>

          <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
            <p>Use the navigation buttons to move between questions</p>
          </div>
        </div>
      )}
      
      <ThemeToggle />
    </main>
  );
}
