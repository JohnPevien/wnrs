'use client';

import { motion } from 'framer-motion';

interface QuestionCardProps {
  question: {
    id: number;
    text: string;
    textJP: string;
  };
  onSwipe: (direction: 'left' | 'right') => void;
}

export function QuestionCard({ question, onSwipe }: QuestionCardProps) {
  return (
    <div className="w-[80vw] max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-colors">
      <div className="h-full flex flex-col justify-center items-center text-center space-y-6 min-h-[300px]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{question.text}</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">{question.textJP}</p>
      </div>
      
      <div className="flex justify-center space-x-6 mt-6">
        <button
          onClick={() => onSwipe('left')}
          className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center"
        >
          ← Previous
        </button>
        <button
          onClick={() => onSwipe('right')}
          className="px-6 py-3 rounded-lg bg-blue-500 dark:bg-blue-600 text-white font-medium hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors flex items-center"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
