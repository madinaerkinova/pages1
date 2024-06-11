import React, { useEffect, useState } from "react";

const TextTypingEffect = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const nextTextDelay = 1500;

    let typingTimeout;
    let erasingTimeout;
    let nextTextTimeout;

    const typeText = (text, index) => {
      if (index < text.length) {
        setCurrentText((prev) => prev + text.charAt(index));
        typingTimeout = setTimeout(() => typeText(text, index + 1), typingSpeed);
      } else {
        nextTextTimeout = setTimeout(() => eraseText(text), nextTextDelay);
      }
    };

    const eraseText = (text) => {
      if (text.length > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        erasingTimeout = setTimeout(() => eraseText(text.slice(0, -1)), erasingSpeed);
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    };

    typeText(texts[currentIndex], 0);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
      clearTimeout(nextTextTimeout);
    };
  }, [currentIndex, texts]);

  return <span>{currentText}</span>;
};

export default TextTypingEffect;
