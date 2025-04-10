import React, { useState } from "react";
import "./App.css";

const translations = {
  hello: "kamusta",
  goodbye: "paalam",
  thank_you: "salamat",
  sorry: "paumanhin",
  please: "pakiusap",
  love: "pagmamahal",
  friend: "kaibigan",
  family: "pamilya",
  beautiful: "maganda",
  food: "pagkain",
};

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleTranslate = () => {
    const key = input.trim().toLowerCase().replace(" ", "_");
    const result = translations[key];
    setOutput(result || "No translation found.");
  };

  return (
    <div className="translator-container">
      <h1>English to Tagalog Translator</h1>
      <label htmlFor="wordInput">Enter an English word:</label>
      <textarea
        id="wordInput"
        placeholder="e.g. love"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      {output && <div className="output">{output}</div>}
    </div>
  );
}

export default App;