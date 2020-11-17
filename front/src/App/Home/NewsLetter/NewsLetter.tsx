import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import './NewsLetter.scss';

const NewsLetter = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const onSubmit = () => {
        try{
            if(email.length < 3){
                throw new Error('Veuillez renseigner une adresse email correcte.');
            }
            setError('');
        }catch(e){
            setError(e.message);
        }
    }

    return (
        <div className="newsletter">
            <p>Inscrivez-vous à notre Newsletter et recevez des nouvelles des entreprises.</p>
            <div className="newsletter__input">
                <label htmlFor="email">Entrez votre adresse email</label>
                <input id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Entrez votre email"/>
                <button onClick={onSubmit} className="bg-primary" role="button"><BsArrowRight/></button>
            </div>
            { error && <p className="newsletter__error">{error}</p>}
        </div>
    )
};

export default NewsLetter;