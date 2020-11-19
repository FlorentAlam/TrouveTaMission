import React, { FunctionComponent } from 'react';
import Connexion from './Connexion/Connexion';
import Inscription from './Inscription/Inscription';
import './ConnexionInscription.scss';
import { Link, useHistory } from 'react-router-dom';

type ConnexionInscriptionProps = {
    type: 'connexion' | 'inscription'
}

type PagesType = {
    [key: string]: JSX.Element;
}
type FooterType = {
    [key: string]: {
        path: string,
        text: string
    }
}

const PAGES:PagesType = {
    'connexion': <Connexion/>,
    'inscription': <Inscription/>
}

const FOOTER: FooterType = {
    'connexion': {
        path: '/inscription',
        text: 'Vous n\'avez pas encore de compte ?'
    },
    'inscription': {
        path: '/connexion',
        text: 'Vous avez déjà un compte ?'
    }
}

const ConnexionInscription : FunctionComponent<ConnexionInscriptionProps> = ({type}) => {
    // const history = useHistory();

    // const redirect = () => {
    //     history.push('/');
    // }

    return(
        <div className="connexion-inscription">
            <div className="connexion-inscription__image">
            </div>
            <main className="connexion-inscription__content">
                <h1><Link to="/">Trouve ton taf</Link></h1>
                {PAGES[type]}
                <footer>
                    <Link to={FOOTER[type].path}>{FOOTER[type].text}</Link>
                </footer>
            </main>
        </div>
    )
};

export default ConnexionInscription;