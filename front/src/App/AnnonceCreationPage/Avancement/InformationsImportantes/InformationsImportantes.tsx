import React, { FunctionComponent } from 'react';
import { IFormData } from '../IFormData';
import Competences from './Competences/Competences';

interface IInformationsImportantes{
    values: IFormData,
    onUpdate: (data: IFormData) => void
}

const InformationsImportantes: FunctionComponent<IInformationsImportantes> = ({values, onUpdate}) => {
    return (
        <form>
            <label htmlFor="intitule">Intitulé <span className="annonce-create__requis col-primary">requis</span></label>
            <input required type="text" name="intitule" id="intitule" value={values.intitule} onChange={e => onUpdate({...values, intitule: e.target.value})}/>

            <label htmlFor="ville">Ville <span className="annonce-create__requis col-primary">requis</span></label>
            <input required type="text" name="ville" id="ville" value={values.ville} onChange={e => onUpdate({...values, ville: e.target.value})}/>

            <label htmlFor="entreprise">Entreprise <span className="annonce-create__requis col-primary">requis</span></label>
            <input required type="text" name="entreprise" id="entreprise" value={values.entreprise} onChange={e => onUpdate({...values, entreprise: e.target.value})}/>

            <Competences/>
        </form>
    )
};

export default InformationsImportantes;