import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu/MobileMenu';
import { RiUser3Line } from 'react-icons/ri';
import './MobileNav.css';
import MobileUserMenu from './MobileUserMenu/MobileUserMenu';

const MobileNav = () => {

    const [areMenuOpened, toggleMenus] = useState({mainMenu: false, userMenu: false});

    return (
    <>
        <nav className="navigation-mobile">
            <div className="hamburger-container" onClick={() => toggleMenus({mainMenu: !areMenuOpened.mainMenu, userMenu: false})}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Link to="/">Trouve ton job</Link>
            <RiUser3Line onClick={() => toggleMenus({mainMenu: false, userMenu: !areMenuOpened.userMenu})}/>
        </nav>
        <MobileMenu isMenuOpen={areMenuOpened.mainMenu} toggleMenu={() => toggleMenus({mainMenu:false, userMenu: false})}/>
        <MobileUserMenu isMenuOpen={areMenuOpened.userMenu} toggleMenu={() => toggleMenus({mainMenu:false, userMenu: false})}/>
    </>
)};

export default MobileNav;