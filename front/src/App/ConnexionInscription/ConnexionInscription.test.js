import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../state/store';
import ConnexionInscription from './ConnexionInscription';


describe('connexion/inscription page', () => {
    it('should properly render inscription page', () => {
        const {getByText, queryByText} = render(<Provider store={store}><BrowserRouter><ConnexionInscription type="inscription"/></BrowserRouter></Provider>);
        expect(getByText('Inscription')).not.toBe(null);
        expect(queryByText('connexion')).toBe(null);
    
        expect(getByText('Adresse email')).not.toBe(null);
        expect(getByText('Mot de passe')).not.toBe(null);
        expect(getByText('Répétez votre mot de passe')).not.toBe(null);
        expect(getByText('En cliquant sur Continuer vous acceptez nos conditions d\'utilisation.')).not.toBe(null);
        expect(getByText('Continuer')).not.toBe(null);
        expect(getByText('Vous avez déjà un compte ?')).not.toBe(null);
        expect(queryByText('Ne devrais pas etre present.')).toBe(null);
    });
    
    it('should properly render connexion page', () => {
        const {getByText, queryByText} = render(<Provider store={store}><BrowserRouter><ConnexionInscription type="connexion"/></BrowserRouter></Provider>);
        expect(getByText('Connexion')).not.toBe(null);
        expect(queryByText('inscription')).toBe(null);
    
        expect(getByText('Adresse email')).not.toBe(null);
        expect(getByText('Mot de passe')).not.toBe(null);
        expect(queryByText('Répétez votre mot de passe')).toBe(null);
        expect(getByText('Continuer')).not.toBe(null);
        expect(getByText('Vous n\'avez pas encore de compte ?')).not.toBe(null);
    });
})