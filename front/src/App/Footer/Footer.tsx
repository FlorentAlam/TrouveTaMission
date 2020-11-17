import React from 'react';
import './Footer.scss';

const Footer = () => (
    <footer className="footer">
        <div className="footer__links">
            <div className="footer__column">
                <h3>Catégories</h3>
                <ul>
                    <li>Developpeur IOS</li>
                    <li>Developpeur Front-end</li>
                    <li>UX Designers</li>
                    <li>UI Designers</li>
                    <li>Traducteur</li>
                    <li>Programmation et tech</li>
                </ul>
            </div>
            <div className="footer__column">
                <h3>Communauté</h3>
                <ul>
                    <li>Evenements</li>
                    <li>Blog</li>
                    <li>Forum</li>
                    <li>Podcast</li>
                    <li>Affiliés</li>
                    <li>Inviter un ami</li>
                </ul>
            </div>
        </div>
        <hr/>
        <span className="footer__trademark">2020 Florent Alamachere</span>
    </footer>
);

export default Footer;