'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MoveLeft, MoveRight } from 'lucide-react';

interface QuestionCardProps {
  question: {
    id: number;
    text: string;
    textJP: string;
  };
  onSwipe: (direction: 'left' | 'right') => void;
}

export function QuestionCard({ question, onSwipe }: QuestionCardProps) {
  const [showJapanese, setShowJapanese] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const variants = {
    center: { x: 0, opacity: 1, scale: 1 },
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'left' ? -1000 : 1000,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.5 }
    }),
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'left' ? 1000 : -1000,
      opacity: 0,
      scale: 0.5
    })
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    setDirection(direction);
    onSwipe(direction);
  };

  return (
    <motion.div
      key={question.id}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="w-[80vw] max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-colors"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = offset.x;
        if (Math.abs(swipe) > 100) {
          handleSwipe(swipe < 0 ? 'left' : 'right');
        }
      }}
    >
      <div className="h-full flex flex-col justify-center items-center text-center space-y-6 min-h-[300px]">
      <button
          onClick={() => setShowJapanese(!showJapanese)}
          className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {showJapanese ? 'Hide Translation' : 'Show Translation'}
        </button>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{question.text}</h2>
        {showJapanese && (
          <p className="text-lg text-gray-700 dark:text-gray-300">{question.textJP}</p>
        )}
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <div className="flex justify-center space-x-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSwipe('left')}
            className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center relative group"
          >
            <span className="flex items-center">
              <motion.span 
                className="inline-block mr-1"
                animate={{ x: 0 }}
                whileHover={{ x: 0 }}
                variants={{
                  hover: { x: -5 }
                }}
              >
                <MoveLeft 
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform duration-200" 
                />
              </motion.span>
              Previous
            </span>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSwipe('right')}
            className="px-6 py-3 rounded-lg bg-blue-500 dark:bg-blue-600 text-white font-medium hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors flex items-center relative group"
          >
            <span className="flex items-center">
              Next
              <motion.span 
                className="inline-block ml-1"
                animate={{ x: 0 }}
                whileHover={{ x: 0 }}
                variants={{
                  hover: { x: 5 }
                }}
              >
                <MoveRight 
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200" 
                />
              </motion.span>
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
