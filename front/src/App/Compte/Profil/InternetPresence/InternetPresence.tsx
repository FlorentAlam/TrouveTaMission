import React, { FunctionComponent } from 'react';
import IProfil from '../IProfil';

const internetPresenceDatas = [
    {name: 'site', type: "text", label: 'Site internet'},
    {name: 'twitter', type: "text", label: 'Twitter'},
    {name: 'linkedin', type: "text", label: 'LinkedIn'},
    {name: 'github', type: "text", label: 'Github'},
    {name: 'behance', type: "text", label: 'Behance'},
    {name: 'dribbble', type: "text", label: 'Dribbble'},
    {name: 'stackoverflow', type: "text", label: 'Stack Overflow'},
    {name: 'awwwards', type: "text", label: 'Awwwards'},
]

const InternetPresence: FunctionComponent<IProfil> = ({userInfos, setInfos}) => (
    <>
        <h2>Présence sur internet</h2>
        <fieldset>
            {
                internetPresenceDatas.map(data => (
                    <div key={data.name}>
                        <label htmlFor={data.name}>{data.label}</label>
                        <input type={data.type} id={data.name} name={data.name} value={userInfos[data.name]} onChange={(e) => setInfos({...userInfos, [data.name]: e.target.value})}/>
                    </div>
                ))
            }
        </fieldset>
    </>
);

export default InternetPresence;