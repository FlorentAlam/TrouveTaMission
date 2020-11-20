import React, { FunctionComponent } from 'react';
import { IFormData } from '../IFormData';

interface IInformationFacultatives{
    values: IFormData,
    onUpdate: (data: IFormData) => void
}

const InformationsFacultatives: FunctionComponent<IInformationFacultatives> = ({values, onUpdate}) => (
    <form>
        <h2 style={{textAlign: "center"}}>Informations facultatives</h2>
        <label htmlFor="type">Type de contrat</label>
        <input type="text" name="type" id="type" value={values.type} onChange={e => onUpdate({...values, type: e.target.value})}/>

        <label htmlFor="salaire">Rémunération</label>
        <input type="text" id="salaire" name="salaire" value={values.salaire} onChange={e => onUpdate({...values, salaire: e.target.value})}/>

        <label htmlFor="statut">Statut</label>
        <input type="text" id="statut" name="statut" value={values.statut} onChange={e => onUpdate({...values, statut: e.target.value})}/>

        <label htmlFor="duree">Durée de travail hebdomadaire</label>
        <input type="text" id="duree" name="duree" value={values.duree} onChange={e => onUpdate({...values, duree: e.target.value})}/>
    </form>
);

export default InformationsFacultatives;