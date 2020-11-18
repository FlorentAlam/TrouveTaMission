import React, { useState } from 'react';

const ContenuAnnonce = () => {
    const [annonce, setAnnonce] = useState('');

    return (
        <>
            <label htmlFor="annonce">Annonce <span className="annonce-create__requis col-primary">requis</span></label>
            <textarea required rows={20} name="annonce" id="annonce" value={annonce} onChange={e => setAnnonce(e.target.value)}/>
        </>
    )
};

export default ContenuAnnonce;