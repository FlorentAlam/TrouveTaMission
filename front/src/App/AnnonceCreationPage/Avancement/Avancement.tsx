import React, { useEffect, useState } from 'react';
import ContenuAnnonce from './ContenuAnnonce/ContenuAnnonce';
import InformationsImportantes from './InformationsImportantes/InformationsImportantes';
import './Avancement.scss';

const Avancement = () => {
    const [sliderNumber, setSliderNumber] = useState(0);    
    
    return(
        <>
            <div className="avancement__outer">
                <div className="avancement__inner bg-primary" style={{transform: `scaleX(${sliderNumber / 3})`}}></div>
            </div>
            <div className="avancement__sliders__container">
                <InformationsImportantes sliderNumber={sliderNumber}/>
                <ContenuAnnonce sliderNumber={sliderNumber}/>
            </div>
            <div className="avancement__buttons">
                <button className="bg-primary" disabled={sliderNumber === 0 ? true : false} onClick={() => setSliderNumber(sliderNumber - 1)}>Précédent</button>
                <button className="bg-primary" disabled={sliderNumber === 3 ? true : false} onClick={() => setSliderNumber(sliderNumber + 1)}>Suivant</button>
            </div>
        </>
    )
}

export default Avancement;