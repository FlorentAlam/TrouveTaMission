import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import './Competences.scss';

const Competences = () => {

    const [currentCompetence, setCurrentCompetence] = useState('');
    const [competences, setCompetences] = useState<string[]>([]);
    const [error, setError] = useState({error: false, message: ''});

    const addCompetence = (e:React.MouseEvent) => {
        e.preventDefault();
        try{
            if(competences.length === 15) throw new Error('Vous ne pouvez pas ajouter plus de 15 compétences, supprimez en une si vous souhaitez en rajouter une nouvelle.');
            if(currentCompetence.length < 1) throw new Error('Veuillez remplir le champs pour rajouter une compétence.')
            setError({error: false, message: ''});
            setCompetences([...competences, currentCompetence]);
            setCurrentCompetence('');
        }catch(e){
            setError({error: true, message: e.message});
        }
    }

    const removeCompetence = (id: number) => {
        const arr = [...competences];
        arr.splice(id, 1);
        setCompetences(arr);
        setError({error: false, message: ''});
    }

    return(
        <div className="competences">
            <label htmlFor="competences">Compétences recherchées</label>
            <p className="competences__detail">Ajoutez jusqu'à 15 compétences</p>
            <div className="competences__container bg-secondary">
                {
                    competences.map((competence: string, id: number) => {
                        return (
                            <span className="competences__unit" key={id} onClick={() => removeCompetence(id)}>{competence} <GrFormClose className="competences__unit__close"/></span>
                        )
                    })
                }
            </div>
            <div className="competences__input">
                <input type="text" name="competences" id="competences" value={currentCompetence} onChange={e => setCurrentCompetence(e.target.value)}/>
                <button className="bg-primary" onClick={addCompetence}>Ajouter</button>
            </div>
            {
                error.error && <div className="competences__warning-popup">{error.message}</div>
            }
        </div>
    )
};

export default Competences;