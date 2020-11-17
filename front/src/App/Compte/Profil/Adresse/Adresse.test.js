import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Adresse from './Adresse';

const mockDatas = {
    adresse: '',
    ville: '',
    pays: '',
    codePostal: ''
}

describe('profil adresse', () => {
    it('should properly render component', () => {
        const mockSetInfos = jest.fn();

        const { getByLabelText } = render(<Adresse userInfos={mockDatas} setInfos={mockSetInfos}/>);

        expect(getByLabelText('Adresse')).not.toBe(null);
        expect(getByLabelText('Ville')).not.toBe(null);
        expect(getByLabelText('Pays')).not.toBe(null);
        expect(getByLabelText('Code postal')).not.toBe(null);
    });

    it('should call setInfos on input Change', () => {
        const mockSetInfos = jest.fn();
        
        const { getByLabelText } = render(<Adresse userInfos={mockDatas} setInfos={mockSetInfos}/>);

        const adresseInput = getByLabelText('Adresse');
        const villeInput = getByLabelText('Ville');
        const codePostalInput = getByLabelText('Code postal');
        const paysInput = getByLabelText('Pays');

        fireEvent.change(adresseInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(1);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, adresse: 'd'});

        fireEvent.change(villeInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(2);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, ville: 'd'});

        fireEvent.change(codePostalInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(3);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, codePostal: 'd'});

        fireEvent.change(paysInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(4);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, pays: 'd'});
    });

})