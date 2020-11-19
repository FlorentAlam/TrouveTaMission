import React, { useState } from 'react';
import './Competences.scss';

const Competences = () => {

    const [currentCompetence, setCurrentCompetence] = useState('');
    const [competences, setCompetences] = useState<string[]>([]);
    const [error, setError] = useState(false);

    const addCompetence = (e:React.MouseEvent) => {
        e.preventDefault();
        if(competences.length < 15){
            setError(false);
            setCompetences([...competences, currentCompetence]);
            setCurrentCompetence('');
        } else {
            setError(true);
        }
    }

    const removeCompetence = (id: number) => {
        const arr = [...competences];
        arr.splice(id, 1);
        setCompetences(arr);
    }

    return(
        <div className="competences">
            <label htmlFor="competences">Compétences recherchées</label>
            <p className="competences__detail">Ajoutez jusqu'à 15 compétences</p>
            <div className="competences__container bg-secondary">
                {
                    error && <div className="competences__warning-popup">Vous ne pouvez pas ajouter plus de 15 compétences, supprimez en une si vous voulez en rajouter une nouvelle.</div>
                }
                {
                    competences.map((competence: string, id: number) => {
                        return (
                            <span className="competences__unit" key={id} onClick={() => removeCompetence(id)}>{competence}</span>
                        )
                    })
                }
            </div>
            <div className="competences__input">
                <input type="text" name="competences" id="competences" value={currentCompetence} onChange={e => setCurrentCompetence(e.target.value)}/>
                <button className="bg-primary" onClick={addCompetence}>Ajouter</button>
            </div>
        </div>
    )
};

export default Competences;