import React from 'react';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = (props:any) => {
    const location = useLocation();

    return (
        <>
        {
            location.pathname !== '/connexion' && location.pathname !== '/inscription' && (
                <header>
                    <DesktopNav/>
                    <MobileNav/>
                </header>
            )
        }
        </>
)}

export default Header;