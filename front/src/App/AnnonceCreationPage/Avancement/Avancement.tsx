import React, { useState } from 'react';
import ContenuAnnonce from './ContenuAnnonce/ContenuAnnonce';
import InformationsImportantes from './InformationsImportantes/InformationsImportantes';
import './Avancement.scss';
import { IFormData } from './IFormData';
import InformationsFacultatives from './InformationsFacultatives/InformationsFacultatives';
import Slider from './Slider';
import Resume from './Resume/Resume';
import { GrReturn } from 'react-icons/gr';

const Avancement = () => {
    const [sliderNumber, setSliderNumber] = useState(0);  
    
    const [formData, setFormData] = useState<IFormData>({intitule: '', annonceContent: '', ville: '', entreprise: ''});

    const sliders = [InformationsImportantes, ContenuAnnonce, InformationsFacultatives, Resume];

    const onChangeSlider = (direction: "minus" | "plus") => {

        switch(sliderNumber){
            case 0: {
                if(formData.intitule === '' || formData.ville === '' || formData.entreprise === '') return;
                break;
            }
            case 1: {
                if(formData.annonceContent === '') return;
                break;
            }
            default: {
                break;
            }
        }

        setSliderNumber(sliderNumber + (direction === "minus" ? -1 : +1));
    }

    return(
        <>
            <div className="avancement__outer">
                <div className="avancement__inner bg-primary" style={{transform: `scaleX(${sliderNumber / 3})`}}></div>
            </div>
            <div className="avancement__sliders__container">
                { sliders.map((Slide, id) => <Slider key={id} sliderNumber={sliderNumber}><Slide values={formData} onUpdate={(data:IFormData) => setFormData(data)}/></Slider>)}
            </div>
            <div className="avancement__buttons">
                <button className="bg-primary" disabled={sliderNumber === 0 ? true : false} onClick={() => onChangeSlider('minus')}>Précédent</button>
                <button className="bg-primary" disabled={sliderNumber === 3 ? true : false} onClick={() => onChangeSlider('plus')}>Suivant</button>
            </div>
        </>
    )
}

export default Avancement;