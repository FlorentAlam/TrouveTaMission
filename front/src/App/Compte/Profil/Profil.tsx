import React, { useState } from 'react';
import Adresse from './Adresse/Adresse';
import Informations from './Informations/Informations';
import InternetPresence from './InternetPresence/InternetPresence';

import './Profil.scss';

interface IProfilState {
    [key: string]: string
}

const Profil = () => {
    const [userInfos, setInfos] = useState<IProfilState>({
        //Informations
        prenom: '',
        nom: '',
        email: '',
        civilite: '',
        tel: '',
        poste: '',

        //Adresse
        ville: '',
        pays: '',
        codePostal: '',
        adresse: '',

        //Presence sur internet
        site: '',
        linkedin: '',
        twitter: '',
        github: '',
        stackoverflow: '',
        behance: '',
        dribbble: '',
        awwwards: ''
    });

    const submit = (event: React.MouseEvent) => {
        event.preventDefault();
    }

    return (
    <div className="profil">
        <form className="profil__form">
            <Informations userInfos={userInfos} setInfos={setInfos}/>
            <Adresse userInfos={userInfos} setInfos={setInfos}/>
            <InternetPresence userInfos={userInfos} setInfos={setInfos}/>
            <button type="submit" onClick={submit}>Sauvegarder</button>
        </form>
        
    </div>
)};

export default Profil;