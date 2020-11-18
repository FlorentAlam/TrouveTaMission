import React, { useState } from 'react';

const AnnonceCreationPage = () => {
    
    const [intitule, setIntitule] = useState('');
    const [annonce, setAnnonce] = useState('');
    const [salaire, setSalaire] = useState('');
    const [type, setType] = useState('');

    return (
    <div className="page">
        <h1>Postez une annonce</h1>
        <form>
            <label htmlFor="intitule">Intitulé</label>
            <input type="text" name="intitule" id="intitule" value={intitule} onChange={e => setIntitule(e.target.value)}/>

            <label htmlFor="annonce">Annonce</label>
            <input type="text" name="annonce" id="annonce" value={annonce} onChange={e => setAnnonce(e.target.value)}/>

            <label htmlFor="salaire">Salaire</label>
            <input type="text" name="salaire" id="salaire" value={salaire} onChange={e => setSalaire(e.target.value)}/>

            <label htmlFor="type">Type de contrat</label>
            <input type="text" name="type" id="type" value={type} onChange={e => setType(e.target.value)}/>
            
            <button type="submit">Soumettre</button>
        </form>
    </div>
)};

export default AnnonceCreationPage;