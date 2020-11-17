import React from 'react';
import Profil from './Profil/Profil';
import { Route, Link } from 'react-router-dom';

import './Compte.scss';

const Compte = () => (
    <div className="compte page">
        <nav className="compte__navigation">
            <Link to="/">Test</Link>
            <Link to="/compte/profil">Profil</Link>
        </nav>
        <Route path="/compte/profil" component={Profil}/>
    </div>
);

export default Compte;