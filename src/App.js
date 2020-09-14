import React, { useState } from "react";
import "./App.css";
function App() {
  const [text, setText] = useState("");
  const [correctedText, setCorrectedText] = useState("");
  const [textToRemove, setTextToRemove] = useState("");

  const handleRemotion = (e) => {
    e.preventDefault();
    const textArray = text.split("\n");
    if (textToRemove) {
      const filteredTextArray = textArray.filter((line) => {
        return !line.includes(textToRemove);
      });
      const correction = filteredTextArray.join("\n");
      setCorrectedText(correction);
    } else {
      setCorrectedText(text);
    }
  };
  return (
    <div className="App">
      <h1>Digite o Texto Abaixo</h1>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <h1>As linhas que você quer remover contém</h1>
      <input
        value={textToRemove}
        onChange={(e) => {
          setTextToRemove(e.target.value);
        }}
      />
      <button onClick={(e) => handleRemotion(e)}>Remover</button>
      <h1>Texto Corrigido</h1>
      <textarea value={correctedText} />
    </div>
  );
}

export default App;
