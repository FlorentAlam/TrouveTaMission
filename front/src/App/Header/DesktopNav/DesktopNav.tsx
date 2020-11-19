import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './DesktopNav.scss';

const DesktopNav = () => {
    return (
    <nav className="navigation--desktop">
        <Link to="/"><h1>Trouve Ta Mission</h1></Link>
        <ul className="navigation--desktop__links">
            <li className="navigation--desktop__links__link"><Link to="/">Accueil</Link></li>
            <li className="navigation--desktop__links__link"><Link to="/recherche">Rechercher</Link></li>
        </ul>
        <div className="navigation--desktop__user-buttons">
            <Link to="/connexion"><FiLogIn className="col-primary user-buttons__icon"/>Se connecter</Link>
            <Link to="/inscription" className="bg-primary">S'inscrire</Link>
        </div>
    </nav>
)};

export default DesktopNav;