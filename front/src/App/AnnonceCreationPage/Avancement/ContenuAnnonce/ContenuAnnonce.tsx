import React, { FunctionComponent } from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { IFormData } from '../IFormData';

interface IContenuAnnonce{
    values: IFormData,
    onUpdate: (data: IFormData) => void
}

const ContenuAnnonce: FunctionComponent<IContenuAnnonce> = ({values, onUpdate}) => {
    const config = {
        placeholderText: 'Entrez votre texte'
    }

    return (
        <>
            <h2>Contenu de votre annonce</h2>
            <div id='editor' style={{width: '700px', marginTop: '50px'}}>
                <FroalaEditorComponent
                    tag="textarea"
                    config={config}
                    model={values.annonceContent}
                    onModelChange={(value:string) => onUpdate({...values, annonceContent: value})}
                />
            </div>
        </>
    )
};

export default ContenuAnnonce;