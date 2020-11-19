import React, { useState } from 'react';
import ContenuAnnonce from './ContenuAnnonce/ContenuAnnonce';
import InformationsImportantes from './InformationsImportantes/InformationsImportantes';
import './Avancement.scss';
import { IFormData } from './IFormData';
import InformationsFacultatives from './InformationsFacultatives/InformationsFacultatives';
import Slider from './Slider';

const Avancement = () => {
    const [sliderNumber, setSliderNumber] = useState(0);  
    
    const [formData, setFormData] = useState<IFormData>({intitule: '', type: '', annonceContent: ''});

    const sliders = [InformationsImportantes, ContenuAnnonce, InformationsFacultatives];

    return(
        <>
            <div className="avancement__outer">
                <div className="avancement__inner bg-primary" style={{transform: `scaleX(${sliderNumber / 3})`}}></div>
            </div>
            <div className="avancement__sliders__container">
                { sliders.map((Slide, id) => <Slider key={id} sliderNumber={sliderNumber}><Slide values={formData} onUpdate={(data:IFormData) => setFormData(data)}/></Slider>)}
            </div>
            <div className="avancement__buttons">
                <button className="bg-primary" disabled={sliderNumber === 0 ? true : false} onClick={() => setSliderNumber(sliderNumber - 1)}>Précédent</button>
                <button className="bg-primary" disabled={sliderNumber === 3 ? true : false} onClick={() => setSliderNumber(sliderNumber + 1)}>Suivant</button>
            </div>
        </>
    )
}

export default Avancement;