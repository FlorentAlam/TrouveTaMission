import React, { useState } from 'react';
import Competences from './Competences/Competences';

const InformationsImportantes = () => {

    const [intitule, setIntitule] = useState('');
    const [salaire, setSalaire] = useState('');
    const [type, setType] = useState('');


    return (
        <form>
            <label htmlFor="intitule">Intitulé <span className="annonce-create__requis col-primary">requis</span></label>
            <input required type="text" name="intitule" id="intitule" value={intitule} onChange={e => setIntitule(e.target.value)}/>

            <Competences/>

            <label htmlFor="type">Type de contrat <span className="annonce-create__requis col-primary">requis</span></label>
            <input required type="text" name="type" id="type" value={type} onChange={e => setType(e.target.value)}/>

            <label htmlFor="salaire">Salaire</label>
            <input type="text" name="salaire" id="salaire" value={salaire} onChange={e => setSalaire(e.target.value)}/>
            
            <button type="submit">Soumettre</button>
        </form>
    )
};

export default InformationsImportantes;