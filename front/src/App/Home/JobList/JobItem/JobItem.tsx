import React, { FunctionComponent } from 'react';

interface IJobItem{
    id: string
}

const JobItem : FunctionComponent<IJobItem> = ({id}) => {
    return (
        <tr className="job-item">
            <td className="job-item__compagny">ACCOMPAGNIA'DOM</td>
            <td className="job-item__poste">Aide à domicile</td>
            <td className="job-item__ville">Nice</td>
            <td className="job-item__salaire">10.50€/H</td>
            <td className="job-item__date">7 jours</td>
            <td><button className="job-item__postuler">Postuler</button></td>
        </tr>
    );
}

export default JobItem;