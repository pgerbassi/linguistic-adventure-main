import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Olá",
  "Hello",
  "Bonjour",
  "Hola",
  "你好",
  "مرحبا",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "Привет",
];

interface FloatingWord {
  id: number;
  word: string;
  x: number;
  y: number;
  rotation: number;
}

const AnimatedWatermark = () => {
  const [floatingWords, setFloatingWords] = useState<FloatingWord[]>([]);

  useEffect(() => {
    const createWord = () => {
      const id = Date.now();
      const word = words[Math.floor(Math.random() * words.length)];
      const x = Math.random() * 100; // Random position from 0-100%
      const y = -20; // Start above the viewport
      const rotation = Math.random() * 45 - 22.5; // Random rotation between -22.5 and 22.5 degrees

      return { id, word, x, y, rotation };
    };

    const addWord = () => {
      setFloatingWords((prev) => [...prev, createWord()]);
    };

    const removeWord = (id: number) => {
      setFloatingWords((prev) => prev.filter((word) => word.id !== id));
    };

    // Add new word every 3 seconds
    const interval = setInterval(addWord, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingWords.map((floatingWord) => (
        <motion.div
          key={floatingWord.id}
          initial={{
            x: `${floatingWord.x}vw`,
            y: `${floatingWord.y}vh`,
            rotate: floatingWord.rotation,
            opacity: 0,
          }}
          animate={{
            y: "120vh",
            opacity: [0, 0.1, 0.1, 0],
          }}
          transition={{
            duration: 20,
            ease: "linear",
          }}
          onAnimationComplete={() => {
            setFloatingWords((prev) =>
              prev.filter((word) => word.id !== floatingWord.id)
            );
          }}
          className="absolute font-sans text-4xl md:text-6xl select-none hover:scale-110 transition-transform duration-300"
          style={{
            color: "var(--watermark-color, #EEEEEE)",
          }}
        >
          {floatingWord.word}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedWatermark;