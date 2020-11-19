import React, { FunctionComponent, useState } from 'react';
import Competences from './Competences/Competences';

interface IInformationsImportantes{
    sliderNumber: number
}

const InformationsImportantes: FunctionComponent<IInformationsImportantes> = ({sliderNumber}) => {

    const [intitule, setIntitule] = useState('');
    const [type, setType] = useState('');


    return (
        <div className="avancement__slider" style={{transform: `translateX(${-100 * sliderNumber}vw)`}}>
            <form>
                <label htmlFor="intitule">Intitulé <span className="annonce-create__requis col-primary">requis</span></label>
                <input required type="text" name="intitule" id="intitule" value={intitule} onChange={e => setIntitule(e.target.value)}/>

                <Competences/>

                <label htmlFor="type">Type de contrat <span className="annonce-create__requis col-primary">requis</span></label>
                <input required type="text" name="type" id="type" value={type} onChange={e => setType(e.target.value)}/>
            </form>
        </div>
    )
};

export default InformationsImportantes;