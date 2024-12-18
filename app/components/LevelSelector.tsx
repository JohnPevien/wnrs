'use client';

import { motion } from 'framer-motion';

type Level = 'Level1_Perception' | 'Level2_Connection' | 'Level3_Reflection';

interface LevelSelectorProps {
  currentLevel: Level;
  onLevelSelect: (level: Level) => void;
}

export function LevelSelector({ currentLevel, onLevelSelect }: LevelSelectorProps) {
  const levels = [
    { id: 'Level1_Perception', name: 'Level 1: Perception', description: 'Surface level questions to start the conversation' },
    { id: 'Level2_Connection', name: 'Level 2: Connection', description: 'Deeper questions to build meaningful connections' },
    { id: 'Level3_Reflection', name: 'Level 3: Reflection', description: 'Thought-provoking questions for self-reflection' },
  ] as const;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl mx-auto p-4">
      {levels.map((level) => (
        <motion.div
          key={level.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onLevelSelect(level.id as Level)}
          className={`
            cursor-pointer rounded-xl p-6 shadow-lg transition-colors
            ${currentLevel === level.id 
              ? 'bg-blue-500 text-white dark:bg-blue-600' 
              : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
            }
          `}
        >
          <h3 className={`text-lg font-bold mb-2 ${
            currentLevel === level.id 
              ? 'text-white' 
              : 'text-gray-800 dark:text-white'
          }`}>
            {level.name}
          </h3>
          <p className={`text-sm ${
            currentLevel === level.id 
              ? 'text-blue-100 dark:text-blue-200' 
              : 'text-gray-600 dark:text-gray-300'
          }`}>
            {level.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
