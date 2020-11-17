import React, { FunctionComponent, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import './SearchInput.scss';

interface ISearchInputProps{
    onSearch: (intitule: string, ville: string) => void,
    initialIntitule?: string,
    initialVille?: string
}

const SearchInput: FunctionComponent<ISearchInputProps> = ({onSearch, initialIntitule = '', initialVille = ''}) => {

    const [intitule, setIntitule] = useState(initialIntitule);
    const [ville, setVille] = useState(initialVille);

    const onSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        onSearch(intitule, ville);
    }

    return(
        <form className="search-input">
            <label htmlFor="poste">Intitulé du poste</label>
            <span><FiSearch className="icon"/><input type="text" id="poste" name="poste" value={intitule} onChange={e => setIntitule(e.target.value)} placeholder="Intitulé du poste"/></span>
            <label htmlFor="ville">Ville ou code postal</label>
            <span><GrLocation className="icon"/><input type="text" id="ville" name="ville" value={ville} onChange={e => setVille(e.target.value)} placeholder="Ville ou Code postal"/></span>
            <button onClick={onSubmit}>Trouver une mission</button>
        </form>
    )
}

export default SearchInput;