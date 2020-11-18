import React, { useState } from 'react';
import './AnnonceCreation.scss';
import Avancement from './Avancement/Avancement';

const AnnonceCreationPage = () => {
    return (
    <div className="page annonce-create">
        <h1>Postez une annonce</h1>
        <Avancement/>
    </div>
)};

export default AnnonceCreationPage;