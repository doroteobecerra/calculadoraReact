import './App.css';
import Btn from './componentes/Boton';
import Pantalla from './componentes/Pantalla'; 
import Clear from './componentes/btnClear';
import {useState} from 'react'

function App() {
  const [input, setInput] = useState('');
  const addInput = valor => {
    setInput(input + valor)
  }

  const calcularResultado = () =>{
    if(input){
      setInput(eval(input))
    }else{
      alert("Ingrese valores")
    }
    
  }


  return (
    <div className="App">
      <div className="contenedor-calculadora">
          <Pantalla input={input}/>
        <div className="fila">
          <Btn manejarClic={addInput}>7</Btn>
          <Btn manejarClic={addInput}>8</Btn>
          <Btn manejarClic={addInput}>9</Btn>
          <Btn manejarClic={addInput}>*</Btn>
        </div>
        <div className="fila">
          <Btn manejarClic={addInput}>4</Btn>
          <Btn manejarClic={addInput}>5</Btn>
          <Btn manejarClic={addInput}>6</Btn>
          <Btn manejarClic={addInput}>-</Btn>
        </div>
        <div className="fila">
          <Btn manejarClic={addInput}>1</Btn>
          <Btn manejarClic={addInput}>2</Btn>
          <Btn manejarClic={addInput}>3</Btn>
          <Btn manejarClic={addInput}>+</Btn>
        </div>
        <div className="fila">
          <Btn manejarClic={addInput}>.</Btn>
          <Btn manejarClic={addInput}>0</Btn>
          <Btn manejarClic={addInput}>/</Btn>
          <Btn manejarClic={calcularResultado}>=</Btn>
        </div>
        <div className="fila">
          <Clear 
            texto = "AC"
            manejarClic = {()=> setInput('')}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
