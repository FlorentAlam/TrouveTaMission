import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './MobileUserMenu.css';

type MobileUserMenuProps = {
    isMenuOpen: boolean,
    toggleMenu: () => void
}

const MobileUserMenu : FunctionComponent<MobileUserMenuProps> = ({isMenuOpen, toggleMenu}) => {
    return (
        <div className={"menu-user-mobile" + (isMenuOpen ? " menu-user-mobile--open" : " menu-user-mobile--close")}>
            <h1>Connectez vous pour accéder à toutes nos fonctionnalités</h1>
            <Link to="/connexion" onClick={toggleMenu}><button>Connexion</button></Link>
            <Link to="/inscription" onClick={toggleMenu}><button>Inscription</button></Link>
        </div>
    )
};

export default MobileUserMenu;