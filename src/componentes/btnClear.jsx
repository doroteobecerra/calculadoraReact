import '../css/clear.css';

function Clear(props){
    return(
        <div className="clear" onClick={props.manejarClic}>
            {props.texto}
        </div>
    )
}
export default Clear;