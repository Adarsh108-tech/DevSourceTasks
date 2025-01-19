import React, { useState, useEffect } from "react";
import "./random.css"; // Add your CSS styles here

const Random = ({ Text }) => {
  const [text, setText] = useState(Text); // Final text
  const [displayText, setDisplayText] = useState(Text); // Text being animated
  const [intervalId, setIntervalId] = useState(null); // To store the interval ID

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Function to handle animation
  const startAnimation = () => {
    let iteration = 0;
    clearInterval(intervalId); // Clear any existing interval

    const id = setInterval(() => {
      setDisplayText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]; // Use the final text's character if it's already revealed
            }
            return letters[Math.floor(Math.random() * 26)]; // Random character otherwise
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(id); // Stop the interval once the animation is complete
      }

      iteration += 1 / 3;
    }, 30);

    setIntervalId(id); // Store the interval ID
  };

  useEffect(() => {
    startAnimation(); // Start the animation when the component mounts
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <h1
      className="text-center font-mono text-white"
      data-value={Text}
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "",
        padding: "0 clamp(1rem, 2vw, 3rem)",
        borderRadius: "clamp(0.4rem, 0.75vw, 1rem)",
        transition: "background-color 400ms, color 400ms",
      }}
    >
      {displayText}
    </h1>
  );
};

export default Random;
