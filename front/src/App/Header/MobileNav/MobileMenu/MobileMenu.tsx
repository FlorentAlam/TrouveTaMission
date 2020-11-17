import React, { FunctionComponent } from 'react';
import './MobileMenu.css';

type MobileMenuProps = {
    isMenuOpen: boolean,
    toggleMenu: () => void
}

const MobileMenu : FunctionComponent<MobileMenuProps> = ({isMenuOpen, toggleMenu}) => (
    <div className={"menu-mobile" + (isMenuOpen ? " menu-mobile--open" : " menu-mobile--close")}>
        test
    </div>
);

export default MobileMenu;