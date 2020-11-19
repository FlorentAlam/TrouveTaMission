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

            <Competences/>

            <label htmlFor="type">Type de contrat <span className="annonce-create__requis col-primary">requis</span></label>
            <input required type="text" name="type" id="type" value={values.type} onChange={e => onUpdate({...values, type: e.target.value})}/>
        </form>
    )
};

export default InformationsImportantes;