import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import InternetPresence from './InternetPresence';

const mockDatas = {
    site: '',
    twitter: '',
    linkedin: '',
    github: '',
    dribbble: '',
    behance: '',
    stackoverflow: '',
    awwwards: ''
}

describe('profil InternetPresence', () => {
    it('should properly render component', () => {
        const mockSetInfos = jest.fn();

        const { getByLabelText } = render(<InternetPresence userInfos={mockDatas} setInfos={mockSetInfos}/>);

        expect(getByLabelText('Site internet')).not.toBe(null);
        expect(getByLabelText('Twitter')).not.toBe(null);
        expect(getByLabelText('LinkedIn')).not.toBe(null);
        expect(getByLabelText('Github')).not.toBe(null);
        expect(getByLabelText('Behance')).not.toBe(null);
        expect(getByLabelText('Dribbble')).not.toBe(null);
        expect(getByLabelText('Stack Overflow')).not.toBe(null);
        expect(getByLabelText('Awwwards')).not.toBe(null);
    });

    it('should call setInfos on input Change', () => {
        const mockSetInfos = jest.fn();
        
        const { getByLabelText } = render(<InternetPresence userInfos={mockDatas} setInfos={mockSetInfos}/>);

        const internetPresenceInput = getByLabelText('Site internet');
        const twitterInput = getByLabelText('Twitter');
        const githubInput = getByLabelText('Github');
        const linkedInInput = getByLabelText('LinkedIn');
        const behanceInInput = getByLabelText('Behance');
        const dribbbleInInput = getByLabelText('Dribbble');
        const stackInInput = getByLabelText('Stack Overflow');
        const awwwardsInInput = getByLabelText('Awwwards');

        fireEvent.change(internetPresenceInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(1);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, site: 'd'});

        fireEvent.change(twitterInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(2);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, twitter: 'd'});

        fireEvent.change(githubInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(3);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, github: 'd'});

        fireEvent.change(linkedInInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(4);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, linkedin: 'd'});

        fireEvent.change(behanceInInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(5);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, behance: 'd'});

        fireEvent.change(dribbbleInInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(6);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, dribbble: 'd'});

        fireEvent.change(stackInInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(7);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, stackoverflow: 'd'});

        fireEvent.change(awwwardsInInput, {target: {value: 'd'}});
        expect(mockSetInfos).toHaveBeenCalledTimes(8);
        expect(mockSetInfos).toHaveBeenCalledWith({...mockDatas, awwwards: 'd'});
    });

})