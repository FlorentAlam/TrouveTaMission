import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchInput from '../SearchInput';
import './Home.scss';
import JobList from './JobList/JobList';

const Home = () => {
    const history = useHistory();

    const onSubmit = (intitule: string, ville: string) => {
        history.push(`/recherche/${intitule}/${ville}`);
    }

    return (
    <div className="page home">
        <div className="home__hero bg-secondary">
            <SearchInput onSearch={onSubmit}/>
        </div>
        <JobList/>
    </div>
)};

export default Home;