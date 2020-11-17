import React, { FunctionComponent, useState } from 'react';
import { ERRORS } from '../../../utils/constantes';
import { logUser } from '../../../utils/firebase';
import { checkLength } from '../../../utils/formValidation';

const Connexion: FunctionComponent = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({error: false, message: ''});

    const validateData = () => {
        try{
            if(!checkLength(password, 7)) throw new Error(ERRORS.PASSWORD_LENGTH);
            if(!checkLength(email, 1)) throw new Error(ERRORS.EMAIL_FORMAT);
            return true;
        } catch(error){
            setError({error: true, message: error.message});
            return false
        }
    }

    const onSubmit = async (e:React.MouseEvent) => {
        e.preventDefault();

        if(validateData()){ setError(await logUser(email, password)); }
    }

    return(
        <form>
            <h2>Connexion</h2>
            <label htmlFor="email">Adresse email</label>
            <input id="email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password">Mot de passe</label>
            <input id="password" name="password" type="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
            
            <button className="bg-primary col-white" type="submit" onClick={onSubmit}>Continuer</button>
            {error.error && <p>{error.message}</p>}
        </form>
    )
}

export default Connexion;