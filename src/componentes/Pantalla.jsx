import React from "react";
import '../css/pantalla.css'

function Pantalla(props){
    return(
        <div className="input" >
        {props.input}
        </div>
    )
}

export default Pantalla;