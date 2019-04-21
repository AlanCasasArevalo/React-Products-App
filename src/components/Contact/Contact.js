import React, {Component} from 'react'
import ContactStyle from './ContactStyle.css'
class Contact extends Component{
    state = {}
    render() {
        return (
            <form>
                <legend>Formulario de contacto</legend>
                <div className="input-field">
                    <label htmlFor=""> Nombre </label>
                    <input type="text" placeholder="Tu nombre"/>
                </div>
                <div className="input-field">
                    <label htmlFor=""> email </label>
                    <input type="email" placeholder="Tu email"/>
                </div>
                <div className="input-field">
                    <label htmlFor=""> mensaje </label>
                    <textarea name="mensaje" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="input-field enviar">
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
        );
    }
}

export default Contact;