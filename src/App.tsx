import { useState } from 'react';
import './App.css';
import { HangImage } from './components/HangImage';
import { letters } from "./helpers/letters";

function App() {

  const [ word ] = useState("COMPUTADORA");
  const [ hiddenWord, setHiddenWord ] = useState('_ '.repeat(word.length));
  const [ attempts, setAttempts ] = useState(0);

  const setNewHiddenWord = (newHiddenWord: string) => {
    setHiddenWord(newHiddenWord);
  };

  const checkLetter = (letter: string) => {

    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }

    const newHiddenWord = hiddenWord.split(' ');

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {

        newHiddenWord[i] = letter;
      }
    }
    setNewHiddenWord(newHiddenWord.join(' '));

  }

  return (
    <div className="App"> 
      {/*  */}
      <HangImage imageIndex={attempts} />

      <h3>{hiddenWord}</h3>

      <h3>Intentos: {attempts}</h3>

      {/* Botones de letras */}

      {
        letters.map ((letter) =>(
          <button
          onClick={ () => checkLetter(letter) }
          key={letter}>{letter}</button>
        )
      )
      }


    </div>
  )  
};

export default App;
