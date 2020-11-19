import React, { FunctionComponent } from 'react';
import { IFormData } from '../IFormData';

interface IInformationFacultatives{
    values: IFormData,
    onUpdate: (data: IFormData) => void
}

const InformationsFacultatives: FunctionComponent<IInformationFacultatives> = ({values, onUpdate}) => (
    <form>
        <label htmlFor="salaire">Rémunération</label>
        <input type="text" id="salaire" name="salaire" value={values.salaire} onChange={e => onUpdate({...values, salaire: e.target.value})}/>
    </form>
);

export default InformationsFacultatives;