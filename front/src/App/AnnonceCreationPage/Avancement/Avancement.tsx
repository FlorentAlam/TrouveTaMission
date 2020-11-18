import React, { useEffect, useState } from 'react';
import ContenuAnnonce from './ContenuAnnonce/ContenuAnnonce';
import InformationsImportantes from './InformationsImportantes/InformationsImportantes';
import './Avancement.scss';

const Avancement = () => {
    const [sliderNumber, setSliderNumber] = useState(0);    

    useEffect(() => {
        console.log(sliderNumber / 4);
    });

    return(
        <div>
            <div className="avancement__outer">
                <div className="avancement__inner" style={{transform: `scaleX(${sliderNumber / 3})`}}></div>
            </div>
            <InformationsImportantes/>
            <ContenuAnnonce/>
            <button disabled={sliderNumber === 0 ? true : false} onClick={() => setSliderNumber(sliderNumber - 1)}>Précédent</button>
            <button disabled={sliderNumber === 3 ? true : false} onClick={() => setSliderNumber(sliderNumber + 1)}>Suivant</button>
        </div>
    )
}

export default Avancement;