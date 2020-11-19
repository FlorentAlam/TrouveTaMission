import { render } from '@testing-library/react';
import React from 'react';
import Competences from './Competences';

describe('Competences', () => {
    it('renders component properly', () => {
        const { getByText, getByLabelText } = render(<Competences/>);

        expect(getByText("Ajoutez jusqu'à 15 compétences")).not.toBe(null);
        expect(getByLabelText("Compétences recherchées")).not.toBe(null);
    });
});