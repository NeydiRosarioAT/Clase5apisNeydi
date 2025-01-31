import React, { useState } from "react";

const Formulario = () => {

    // Estado para almacenar como objeto los datos del formulario
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    // Estado para indicar si el formulario se ha llenado
    const [formLleno, setFormLleno] = useState(false)

    const [error, setError] = useState('')

    // onChange
    const manejoCambioTexto = (event) => {
        // console.log(event.target.value)
        // event.target.name = Hace referencia al atributo
        // event.target.value = Hace referencia al valor del atributo
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    // onSubmit
    const enviarDatos = (event) => {
        event.preventDefault()

        if (datos.nombre == '') {
            setError("Por favor ingresa el Nombre")
            return
        }
        if (datos.apellido == '') {
            setError("Por favor ingresa el Apelllido")
            return
        }

        setError('')
        setFormLleno(true)
    }
    // En el condicional con el operador ternario, si el formulario se ha llenado, se mostrará el mensaje
return (
        <>
        {error && <h1>{error}</h1> }
            {
                formLleno ?
                    <h1>¡Gracias! responderemos a la brevedad</h1>
                    :
                    <form className="row" onSubmit={enviarDatos}>
                        <div className="col-md-4">
                            <input type="text" placeholder="Nombre" className="form-control" onChange={manejoCambioTexto} name="nombre" />
                        </div>
                        <div className="col-md-4">
                            <input type="text" placeholder="Apellido" className="form-control" onChange={manejoCambioTexto} name="apellido" />
                        </div>
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
            }
        </>
    )
}
export default Formulario