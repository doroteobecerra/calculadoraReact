import '../css/boton.css';
import Pantalla from './Pantalla';

function Btn(props){

    const esOperador = valor => {
        return isNaN(valor) && valor != '.'
    }

    return(
        <div className={`btn ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={()=>props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}

export default Btn;