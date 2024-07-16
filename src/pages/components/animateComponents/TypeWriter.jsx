import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Typewriter = ({ words, typingSpeed = 100 ,erasingSpeed=50 , delayBetweenWords=1000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    if (isErasing) {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, erasingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsErasing(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      if (displayedText.length < words[currentWordIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText(words[currentWordIndex].slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsErasing(true);
        }, delayBetweenWords);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, isErasing, currentWordIndex, words]);

  return (
    <div>
      <AnimatePresence>
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 , delay : currentWordIndex === 0 ? 0.2 : 0}}
        >
          {displayedText}
        </motion.span>
        <motion.span initial={{opacity : 0}} animate={{opacity:1 }} transition ={{
            duration : 0.6,
            repeat:Infinity,
            repeatType:'reverse'
        }}>|</motion.span>
      </AnimatePresence>
    </div>
  );
};

export default Typewriter;
