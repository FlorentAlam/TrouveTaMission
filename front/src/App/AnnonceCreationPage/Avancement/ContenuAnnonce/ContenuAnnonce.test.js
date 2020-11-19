import { render } from '@testing-library/react';
import React from 'react';
import ContenuAnnonce from './ContenuAnnonce';

describe("ContenuAnnonce", () => {
    it('should render component properly', () => {
        const { getByText } = render(<ContenuAnnonce values={{annonceContent: ''}}/>);

        expect(getByText("Contenu de votre annonce")).not.toBe(null);
    })
});