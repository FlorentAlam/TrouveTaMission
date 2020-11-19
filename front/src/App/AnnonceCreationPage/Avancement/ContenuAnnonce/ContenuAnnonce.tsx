import React, { FunctionComponent, useState } from 'react';

interface IContenuAnnonce{
    sliderNumber: number
}

const ContenuAnnonce: FunctionComponent<IContenuAnnonce> = ({sliderNumber}) => {
    const [annonce, setAnnonce] = useState('');

    return (
        <div className="avancement__slider"  style={{transform: `translateX(${-100 * sliderNumber}vw)`}}>
            <label htmlFor="annonce">Annonce <span className="annonce-create__requis col-primary">requis</span></label>
            <textarea required rows={20} name="annonce" id="annonce" value={annonce} onChange={e => setAnnonce(e.target.value)}/>
        </div>
    )
};

export default ContenuAnnonce;