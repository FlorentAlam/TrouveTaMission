import React, { FunctionComponent } from 'react';
import IProfil from '../IProfil';

const adresseDatas = [
    {name: 'adresse', type: "text", label: 'Adresse'},
    {name: 'codePostal', type: "text", label: 'Code postal'},
    {name: 'ville', type: "text", label: 'Ville'},
    {name: 'pays', type: "text", label: 'Pays'},
]


const Adresse: FunctionComponent<IProfil> = ({userInfos, setInfos}) => (
    <>
        <h2>Adresse</h2>
        <fieldset>
        {
            adresseDatas.map(data => (
                <div key={data.name}>
                    <label htmlFor={data.name}>{data.label}</label>
                    <input type={data.type} id={data.name} name={data.name} value={userInfos[data.name]} onChange={(e) => setInfos({...userInfos, [data.name]: e.target.value})}/>
                </div>
            ))
        }
        </fieldset>
    </>
);

export default Adresse;