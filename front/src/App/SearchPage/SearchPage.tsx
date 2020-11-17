import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import SearchInput from '../SearchInput';
import './SearchPage.scss';

const SearchPage = (props:any) => {
    useEffect(() => {
        if(props.match.params.intitule){
            getResults();
        }
    }, []);

    const onSubmit = (intitule: string, ville: string) => {
        getResults();
    }

    const getResults = () => {

    }

    return (
        <div className="page search-page">
            <div className='border'>
                <SearchInput initialIntitule={props.match.params.intitule || ''} initialVille={props.match.params.ville || ''} onSearch={onSubmit}/>
            </div>
            
        </div>
    )
};

export default SearchPage;