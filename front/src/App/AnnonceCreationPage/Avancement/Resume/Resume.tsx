import React, { FunctionComponent } from 'react';
import { IFormData } from '../IFormData';
import './Resume.scss';

interface IResume{
    values: IFormData,
    onUpdate: (data: IFormData) => void
}

const Resume: FunctionComponent<IResume> = ({values}) => (
    <div className="resume">
        <h2>Vérification de votre annonce avant publication</h2>
        <div>
            <span className="resume__intitule">{values.intitule}</span>
            <span className="resume__entreprise">{values.entreprise}</span>
            <span className="resume__ville">{values.ville}</span>
            <p dangerouslySetInnerHTML={{__html: values.annonceContent}}>
            </p>
        </div>
    </div>
);

export default Resume;