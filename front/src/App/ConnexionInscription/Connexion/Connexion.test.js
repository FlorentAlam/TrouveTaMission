import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { ERRORS } from '../../../utils/constantes';
import Connexion from './Connexion';

it('should update email when changing input', () => {
    const { getByLabelText } = render(<Connexion/>);

    const emailInput = getByLabelText('Adresse email');

    expect(emailInput).toHaveValue('');

    fireEvent.change(emailInput, {target: { value: 'test@test.com'}});

    expect(emailInput).not.toHaveValue('john@john.com');
    expect(emailInput).toHaveValue('test@test.com');
});

it('should update password when changing input', () => {
    const { getByLabelText } = render(<Connexion/>);

    const passwordInput = getByLabelText('Mot de passe');

    expect(passwordInput).toHaveValue('');

    fireEvent.change(passwordInput, {target: { value: 'lePassword'}});

    expect(passwordInput).not.toHaveValue('pasLePassword');
    expect(passwordInput).toHaveValue('lePassword');
});

it('should set error correctly when password is not long enough', () => {
    const { getByLabelText, queryByText, getByText } = render(<Connexion/>);

    const passwordInput = getByLabelText('Mot de passe');
    expect(queryByText(ERRORS.PASSWORD_LENGTH)).toBe(null);
    fireEvent.change(passwordInput, {target: { value: 'lePa'}});
    expect(passwordInput).toHaveValue('lePa');

    fireEvent.click(queryByText('Continuer'));

    expect(getByText(ERRORS.PASSWORD_LENGTH)).not.toBe(null);
    fireEvent.change(passwordInput, {target: { value: 'lePasswo'}});
    expect(passwordInput).toHaveValue('lePasswo');
    fireEvent.click(queryByText('Continuer'));
    expect(queryByText(ERRORS.PASSWORD_LENGTH)).toBe(null);
});