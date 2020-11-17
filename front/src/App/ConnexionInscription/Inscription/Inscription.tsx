import React, { FunctionComponent, useState } from 'react';
import { ERRORS } from '../../../utils/constantes';
import { createUser } from '../../../utils/firebase';
import { checkLength } from '../../../utils/formValidation';

const Inscription: FunctionComponent = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [error, setError] = useState({error: false, message: ''});

    const validateData = () => {
        try{
            if(!checkLength(password, 7)) throw new Error(ERRORS.PASSWORD_LENGTH);
            if(!checkLength(email, 1)) throw new Error(ERRORS.EMAIL_FORMAT);
            if(password !== passwordRepeat) throw new Error(ERRORS.DIFFERENT_PASSWORDS);
            return true;
        } catch(error){
            setError({error: true, message: error.message});
            return false
        }
    }

    const onSubmit = async (e:React.MouseEvent) => {
        e.preventDefault();

        if(validateData()){ setError(await createUser(email, password)); }
    }

    return(
        <form>
            <h2>Inscription</h2>
            <label htmlFor="email">Adresse email</label>
            <input id="email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password">Mot de passe</label>
            <input id="password" name="password" type="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <label htmlFor="passwordRepeat">Répétez votre mot de passe</label>
            <input id="passwordRepeat" name="passwordRepeat" type="password" autoComplete="off" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}/>
            
            <p>En cliquant sur Continuer vous acceptez nos conditions d'utilisation.</p>

            <button className="bg-primary col-white" type="submit" onClick={onSubmit}>Continuer</button>
            {error.error && <p>{error.message}</p>}
        </form>
    )
}

export default Inscription;