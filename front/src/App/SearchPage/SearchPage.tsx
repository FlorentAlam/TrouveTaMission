import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import SearchInput from '../SearchInput';
import Annonces from './Annonces/Annonces';
import './SearchPage.scss';

interface IJobData{
    intitule: string,
    entreprise: string,
}

const SearchPage = (props:any) => {

    const [searchResult, setSearchResult] = useState<IJobData[] | []>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(props.match.params.intitule){
            getResults();
        }
    }, []);

    const onSubmit = (intitule: string, ville: string) => {
        setLoading(true);
        // getResults();
    }

    const getResults = () => {
        setSearchResult(
            [{
                entreprise: "test",
                intitule: "test"
            }, {
                entreprise: "test",
                intitule: "test"
            }, {
                entreprise: "test",
                intitule: "test"
            }]
        );
        setLoading(false);
    }

    return (
        <div className="page search-page">
            <div className='border'>
                <SearchInput initialIntitule={props.match.params.intitule || ''} initialVille={props.match.params.ville || ''} onSearch={onSubmit}/>
            </div>
            { loading && <Loading/>}
            { !loading && searchResult.length > 0 && <Annonces/>}
        </div>
    )
};

export default SearchPage;