import React from 'react';
import JobItem from './JobItem/JobItem';
import './JobList.scss';

const JobList = () => {
    return (
        <div className="last-offers">
            <h2>Les dernières missions sur notre plateforme</h2>
            <div>
                <input type="checkbox" name="fulltime" id="fulltime"/>
                <label htmlFor="fulltime">Temps plein</label>

                <input type="checkbox" name="parttime" id="parttime"/>
                <label htmlFor="parttime">Temps partiel</label>

                <input type="checkbox" name="remote" id="remote"/>
                <label htmlFor="remote">Telepresentiel</label>
            </div>
            <table cellSpacing="0">
                <thead>
                    <tr className="bg-secondary">
                        <th>Entreprise</th>
                        <th>Poste</th>
                        <th>Lieu</th>
                        <th>Rémunération</th>
                        <th>Il y a</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                    <JobItem/>
                </tbody>
            </table>
        </div>
    )
};

export default JobList;