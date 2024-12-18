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
    <div className="w-[80vw] max-w-md bg-white rounded-2xl shadow-xl p-6">
      <div className="h-full flex flex-col justify-center items-center text-center space-y-6 min-h-[300px]">
        <h2 className="text-2xl font-bold text-gray-800">{question.text}</h2>
        <p className="text-lg text-gray-600">{question.textJP}</p>
      </div>
      
      <div className="flex justify-center space-x-6 mt-6">
        <button
          onClick={() => onSwipe('left')}
          className="px-6 py-3 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors flex items-center"
        >
          ← Previous
        </button>
        <button
          onClick={() => onSwipe('right')}
          className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors flex items-center"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
