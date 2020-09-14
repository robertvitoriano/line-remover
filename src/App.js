import React,{useState} from 'react';
import './App.css';
function App() {
  const [text, setText] = useState("");
  const[correctedText,setCorrectedText] = useState('');

  const handleRemotion= (e)=>{
    e.preventDefault();
    const firstLine = text.split("\n")[0];
    console.log(firstLine);
  }
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
      <input/>
      <button onClick={e=>handleRemotion(e)}>Remover</button>
      <h1>Texto Corrigido</h1>
      <textarea
        value={correctedText}
      />
    </div>
  );
}

export default App;
