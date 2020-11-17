import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Informations from './Informations';

const mockDatas = {
    prenom: '',
    nom: '',
    email: '',
    tel: '',
    poste: ''
}

describe('profil informations', () => {
    it('should properly render component', () => {
        const mockSetInfos = jest.fn();

        const { getByLabelText } = render(<Informations userInfos={mockDatas} setInfos={mockSetInfos}/>);

        expect(getByLabelText('Prénom')).not.toBe(null);
        expect(getByLabelText('Nom')).not.toBe(null);
        expect(getByLabelText('Adresse email')).not.toBe(null);
        expect(getByLabelText('Numéro de téléphone')).not.toBe(null);
        expect(getByLabelText('Poste actuel')).not.toBe(null);
    });

    it('should call setInfos on input Change', () => {
        const mockSetInfos = jest.fn();
        
        const { getByLabelText } = render(<Informations userInfos={mockDatas} setInfos={mockSetInfos}/>);

        const prenomInput = getByLabelText('Prénom');
        const nomInput = getByLabelText('Nom');
        const emailInput = getByLabelText('Adresse email');
        const telInput = getByLabelText('Numéro de téléphone');
        const posteInput = getByLabelText('Poste actuel');

        fireEvent.change(prenomInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(1);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, prenom: 'd'});

        fireEvent.change(nomInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(2);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, nom: 'd'});

        fireEvent.change(emailInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(3);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, email: 'd'});

        fireEvent.change(telInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(4);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, tel: 'd'});

        fireEvent.change(posteInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(5);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, poste: 'd'});
    });

});