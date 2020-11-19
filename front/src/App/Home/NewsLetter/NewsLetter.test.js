import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import NewsLetter from './NewsLetter';

describe('Newsletter', () => {
    it('properly render component', () => {
        const { getByText, getByLabelText } = render(<NewsLetter/>);

        expect(getByText("Inscrivez-vous à notre Newsletter et recevez des nouvelles des entreprises.")).not.toBe(null);
        expect(getByLabelText("Entrez votre adresse email")).not.toBe(null);
    });

    it('updates input on change', () => {
        const { getByLabelText } = render(<NewsLetter/>);

        const input = getByLabelText("Entrez votre adresse email");
        expect(input).toHaveValue("");
        fireEvent.change(input, {target: {value: "test@test.com"}});
        expect(input).toHaveValue("test@test.com");
    });

    it('should show error message when email is not long enough', () => {
        const { getByLabelText, getByRole, getByText, queryByText } = render(<NewsLetter/>);

        const input = getByLabelText("Entrez votre adresse email");
        const button = getByRole("button");

        expect(queryByText("Veuillez renseigner une adresse email correcte.")).toBe(null);

        expect(input).toHaveValue("");
        fireEvent.click(button);
        expect(getByText("Veuillez renseigner une adresse email correcte.")).not.toBe(null);


        fireEvent.change(input, {target: {value: "test@test.com"}});
        expect(input).toHaveValue("test@test.com");
        fireEvent.click(button);
        expect(queryByText("Veuillez renseigner une adresse email correcte.")).toBe(null);
    });
});