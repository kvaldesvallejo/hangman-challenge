import './App.css';
import { HangImage } from './components/HangImage';
import { letters } from "./helpers/letters";

function App() {

  return (
    <div className="App"> 
      {/*  */}
      <HangImage imageIndex={5} />

      <h3>_ _ _ _ _ _ _ _ _ _ _ _ _ _</h3>

      <h3>Intentos: 0</h3>

      {/* Botones de letras */}

      {
        letters.map ((letter) =>(
          <button key={letter}>{letter}</button>
        )
      )
      }


    </div>
  )  
};

export default App;
