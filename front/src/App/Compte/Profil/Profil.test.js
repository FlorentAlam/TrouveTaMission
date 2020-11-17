import { render } from '@testing-library/react';
import React from 'react';

import Profil from './Profil';

describe('profil page', () => {
    let getByText, getAllByText;

    beforeEach(() => {
        const rendu = render(<Profil/>);
        getByText = rendu.getByText;
        getAllByText = rendu.getAllByText;
    });

    it('render properly component', () => {
        expect(getByText('Informations personnelles')).not.toBe(null);
        expect(getAllByText('Adresse')).not.toBe(null);
        expect(getByText('Présence sur internet')).not.toBe(null);
        expect(getByText('Sauvegarder')).not.toBe(null);
    });
});