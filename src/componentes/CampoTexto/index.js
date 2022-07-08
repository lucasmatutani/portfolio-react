import "./CampoTexto.css"

const CampoTexto = (props) =>{

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} value={props.valor} required={props.obrigatorio} type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;