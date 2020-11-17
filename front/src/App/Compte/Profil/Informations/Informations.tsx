import React, { FunctionComponent } from 'react';
import IProfil from '../IProfil';

const informationsDatas = [
    {name: 'prenom', type: "text", label: 'Prénom'},
    {name: 'nom', type: "text", label: 'Nom'},
    {name: 'email', type: "email", label: 'Adresse email'},
    {name: 'tel', type: "tel", label: 'Numéro de téléphone'},
    {name: 'poste', type: "text", label: 'Poste actuel'}
]

const Informations: FunctionComponent<IProfil> = ({userInfos, setInfos}) => (
    <>
        <h2>Informations personnelles</h2>
        <fieldset>
            <label htmlFor="civilite">Civilité</label>
            <select name="civilite" id="civilite" value={userInfos.civilite} onChange={(e) => setInfos({...userInfos, civilite: e.target.value})}>
                <option value="madame">Madame</option>
                <option value="monsieur">Monsieur</option>
            </select>

            {
                informationsDatas.map(data => (
                    <div key={data.name}>
                        <label htmlFor={data.name}>{data.label}</label>
                        <input type={data.type} id={data.name} name={data.name} value={userInfos[data.name]} onChange={(e) => setInfos({...userInfos, [data.name]: e.target.value})}/>
                    </div>
                ))
            }
        </fieldset>
    </>
);

export default Informations;