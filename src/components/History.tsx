import { useAtom } from "jotai";
import { historyAtom } from "../state/atoms";

const History: React.FC = () => {
  const [history] = useAtom(historyAtom);

  return (
    <div className="mt-6 p-4 bg-gray-700 rounded shadow-lg max-w-xs mx-auto">
      <h2 className="text-white text-lg mb-2">History</h2>
      <ul className="text-white">
        {history.map((entry, index) => (
          <li key={index} className="mb-1">{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
