import React, {Component} from 'react'
import SearchBarStyle from './SearchBarStyle.css'

class SearchBar extends Component{
    state = {}

    getDataFromForm = (e) => {
        e.preventDefault();
        const valueSearched = e.target.value;

        this.props.getDataFromForm(valueSearched)
    };

    render() {
        return (
            <form className="buscador">
                <input type="text" placeholder="Busqueda" onChange={this.getDataFromForm}/>
            </form>
        );
    }
}

export default SearchBar;