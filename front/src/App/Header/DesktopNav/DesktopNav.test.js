import { render } from '@testing-library/react';
import React from 'react';
import DesktopNav from './DesktopNav';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../state/store';

it('renders component properly', () => {
    const { getByText } = render(<Provider store={store}><Router><DesktopNav/></Router></Provider>);

    expect(getByText('Trouve Ta Mission')).not.toBe(null);
    expect(getByText('Accueil')).not.toBe(null);
    expect(getByText('Rechercher')).not.toBe(null);
    expect(getByText('Se connecter')).not.toBe(null);
    expect(getByText('S\'inscrire')).not.toBe(null);
});