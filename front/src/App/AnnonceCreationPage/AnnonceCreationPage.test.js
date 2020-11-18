import { fireEvent, render } from '@testing-library/react';
import { type } from 'os';
import React from 'react';
import AnnonceCreationPage from './AnnonceCreatePage';

describe('AnnonceCreationPage', () => {
    it('should properly render component', () => {
        const { getByText, getByLabelText } = render(<AnnonceCreationPage/>);

        expect(getByText("Postez une annonce")).not.toBe(null);
        expect(getByLabelText("Intitulé")).not.toBe(null);
        expect(getByLabelText("Annonce")).not.toBe(null);
        expect(getByLabelText("Salaire")).not.toBe(null);
        expect(getByLabelText("Type de contrat")).not.toBe(null);
        expect(getByText("Soumettre")).not.toBe(null);
    });

    it('should update inputs correctly', () => {
        const { getByLabelText } = render(<AnnonceCreationPage/>);

        const intituleInput = getByLabelText("Intitulé");
        const annonceInput = getByLabelText("Annonce");
        const salaireInput = getByLabelText("Salaire");
        const typeInput = getByLabelText("Type de contrat");

        expect(intituleInput).toHaveValue("");
        expect(annonceInput).toHaveValue("");
        expect(salaireInput).toHaveValue("");
        expect(typeInput).toHaveValue("");

        fireEvent.change(intituleInput, {target: {value: "Aide a domicile"}});
        fireEvent.change(annonceInput, {target: {value: "Il faut le bac"}});
        fireEvent.change(salaireInput, {target: {value: "10 000€"}});
        fireEvent.change(typeInput, {target: {value: "plein"}});

        expect(intituleInput).toHaveValue("Aide a domicile");
        expect(annonceInput).toHaveValue("Il faut le bac");
        expect(salaireInput).toHaveValue("10 000€");
        expect(typeInput).toHaveValue("plein");
    });
})