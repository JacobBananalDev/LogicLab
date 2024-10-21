import { atom } from "jotai";

// Display state for the calculator input/output
export const displayAtom = atom<string>("");

// History state, initialized from localStorage
export const historyAtom = atom<string[]>(() => {
  const savedHistory = localStorage.getItem("calc-history");
  try {
    return savedHistory ? (JSON.parse(savedHistory) as string[]) : [];
  } catch {
    return []; // Fallback to an empty array if parsing fails
  }
});

// Writable atom to sync history with localStorage
export const syncedHistoryAtom = atom(
  (get) => get(historyAtom), // Getter function: reads the current value of historyAtom
  (get, set, newHistory: string[]) => { // Setter function: updates the value of historyAtom
    set(historyAtom, newHistory); // Update historyAtom with the new history
    localStorage.setItem("calc-history", JSON.stringify(newHistory)); // Sync the new history with localStorage
  }
);
