import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { useCallback, useEffect } from "react";
import { displayAtom, syncedHistoryAtom } from "../state/atoms"; // Use syncedHistoryAtom for history synchronization
import { evaluate } from "mathjs"; // Use mathjs for safe expression evaluation

const buttons = [
  "7", "8", "9", "/", 
  "4", "5", "6", "*", 
  "1", "2", "3", "-", 
  "0", ".", "=", "+",
  "C" // Add C to the buttons array for consistency
];

const Calculator: React.FC = () => {
  const [display, setDisplay] = useAtom(displayAtom);
  const [history, setHistory] = useAtom(syncedHistoryAtom); // Use syncedHistoryAtom

  const handleInput = useCallback((value: string) => {
    if (value === "=") {
      try {
        const result = evaluate(display).toString();
        setDisplay(result);
        //setHistory([...history, `${display} = ${result}`]); // Sync history with localStorage
        navigator.vibrate?.(50); // Vibration feedback
      } catch {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay((prev) => prev + value);
    }
  }, [display, history, setDisplay, setHistory]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key === "Enter" ? "=" : e.key;
      if (buttons.includes(key) || e.key === "Backspace") {
        if (key === "=") handleInput("=");
        else if (e.key === "Backspace") setDisplay((prev) => prev.slice(0, -1));
        else handleInput(key);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleInput]);

  return (
    <motion.div
      className="max-w-[450px] min-w-[300px] p-4 bg-gray-800 rounded-lg shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-right text-2xl text-white p-4 bg-gray-900 rounded">
        {display || "0"}
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {buttons.map((button) => (
          <button
            key={button}
            className="p-4 bg-purple-600 hover:bg-purple-700 text-white rounded"
            onClick={() => handleInput(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Calculator;
