import './App.css';
import { letters } from "./helpers/letters";

function App() {

  return (
    <div className="App"> 
      {/*  */}
      <h3>Imagenes del Juego</h3>

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
