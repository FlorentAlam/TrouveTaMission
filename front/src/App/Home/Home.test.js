import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Home from './Home';

describe('Homepage component', () => {
    it('should properly render component', () => {
        const { getByText, getByLabelText } = render(<Home/>);

        expect(getByText('Trouver une mission')).not.toBe(null);
        expect(getByLabelText('Intitulé du poste')).not.toBe(null);
        expect(getByLabelText('Ville ou code postal')).not.toBe(null);
    });

    it('should properly update intitulé and ville on change', () => {
        const { getByLabelText } = render(<Home/>);

        const intituleInput = getByLabelText('Intitulé du poste');
        const villeInput = getByLabelText('Ville ou code postal');

        expect(intituleInput).toHaveValue('');
        expect(villeInput).toHaveValue('');

        fireEvent.change(intituleInput, {target: {value: 'developpeur'}});
        fireEvent.change(villeInput, {target: {value: 'nice'}});

        expect(intituleInput).toHaveValue('developpeur');
        expect(villeInput).toHaveValue('nice');
    });
})