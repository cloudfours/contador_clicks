import logo from './logo.svg';
import './App.css';
import freecodecamp from './img/FreeCodeCamp_logo.svg.png'
import Boton from './componentes/botons.jsx'
import Contador from './componentes/contandor'
import {useState} from 'react'

function App() {
  const [numClicks, setNumClicks] = useState(0)
  const manejaClick=()=>{
    setNumClicks(numClicks+1)
}
const reinicarContador=()=>{
    setNumClicks(0)
}
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freecodecamp} alt='logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>
        <Boton  texto='click' esBotonClick={true} manejarClick={manejaClick} />
        <Boton texto='reiniciar' esBotonClick={false} manejarClick={reinicarContador} />
      </div>
   
    </div>
  );
}

export default App;
