import { useState } from "react";
import Calculator from "./components/Calculator";
import History from "./components/History";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-white"} transition-colors`}>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Calculator />
      <History />
    </div>
  );
};

export default App;
