import React, { useState } from 'react';
import './Competences.scss';

const Competences = () => {

    const [currentCompetence, setCurrentCompetence] = useState('');

    return(
        <div className="competences">
            <label htmlFor="competences">Compétences recherchées</label>
            <div className="competences__container bg-secondary">

            </div>
            <div className="competences__input">
                <input type="text" name="competences" id="competences" value={currentCompetence} onChange={e => setCurrentCompetence(e.target.value)}/>
                <button className="bg-primary">Ajouter</button>
            </div>
        </div>
    )
};

export default Competences;