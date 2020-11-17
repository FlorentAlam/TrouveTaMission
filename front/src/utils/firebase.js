import firebase from 'firebase/app';
import 'firebase/auth';
import { FIREBASE_ERRORS } from './constantes';
import axios from 'axios';

export const app = firebase.initializeApp({
    apiKey: "AIzaSyCCKc8Oryl_ollUzZHeD2IDRPRoPrDtxMg",
    appId: "1:226968708695:web:41ba2d8430585df2eca512",
    projectId: "trouve-ton-job",
    authDomain: "trouve-ton-job.firebaseapp.com",     
    databaseURL: "https://trouve-ton-job.firebaseio.com",
    storageBucket: "trouve-ton-job.appspot.com",
    messagingSenderId: "226968708695",
});

export const createUser = async (email, password) => {
    let err = {error: false, message: ''};
    await app.auth().createUserWithEmailAndPassword(email, password)
        .then(async data => {
            await axios.post('http://localhost:3001/user', { user: data.user });
        })
        .catch(function(error) {
            err = FIREBASE_ERRORS[error.code] || FIREBASE_ERRORS['auth/internal-error'];
        });
    return err;
}

export const getUser = async (user) => {
    const result = await axios.get('http://localhost:3001/user', { params: {user} });
    if(result.status === 200){
        return result.data[0];
    }
}

export const logUser = async (email, password) => {
    let err = {error: false, message: ''};
    await app.auth().signInWithEmailAndPassword(email, password).catch(function(error){
        err = FIREBASE_ERRORS[error.code] || FIREBASE_ERRORS['auth/internal-error'];
    });
    return err;
}

export const disconnectUser = async() => {
    await app.auth().signOut().then(() => {
        console.log("success signout");
    }).catch(e => {
        console.log("error signout");
    });
}
