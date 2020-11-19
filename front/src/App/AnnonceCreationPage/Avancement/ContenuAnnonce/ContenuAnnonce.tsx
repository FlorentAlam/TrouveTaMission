import React, { FunctionComponent, useMemo, useRef, useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { IFormData } from '../IFormData';

interface IContenuAnnonce{
    sliderNumber: number,
    values: IFormData,
    onUpdate: (data: IFormData) => void
}

const ContenuAnnonce: FunctionComponent<IContenuAnnonce> = ({sliderNumber, values, onUpdate}) => {
    const config = {
        placeholderText: 'Entrez votre texte'
    }

    return (
        <div className="avancement__slider"  style={{transform: `translateX(${(-window.innerWidth + 75 ) * sliderNumber}px)`}}>
            <h2>Contenu de votre annonce</h2>
            <div id='editor' style={{width: '700px', marginTop: '50px'}}>
                <FroalaEditorComponent
                    tag="textarea"
                    config={config}
                    model={values.annonceContent}
                    onModelChange={(value:string) => onUpdate({...values, annonceContent: value})}
                />
            </div>
        </div>
    )
};

export default ContenuAnnonce;