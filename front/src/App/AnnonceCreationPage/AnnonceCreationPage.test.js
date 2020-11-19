import { render } from '@testing-library/react';
import React from 'react';
import AnnonceCreationPage from './AnnonceCreatePage';


describe('AnnonceCreationPage', () => {
    it('should properly render component', () => {
        const { getByText } = render(<AnnonceCreationPage/>);

        expect(getByText("Postez une annonce")).not.toBe(null);
    });
})