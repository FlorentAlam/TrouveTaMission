import { render } from '@testing-library/react';
import React from 'react';
import MobileUserMenu from './MobileUserMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../../state/store';

it('render component properly', () => {
    const { getByText } = render(<Provider store={store}><Router><MobileUserMenu isMenuOpen={false}/></Router></Provider>);

    expect(getByText('Connexion')).not.toBe(null);
    expect(getByText('Inscription')).not.toBe(null);
});