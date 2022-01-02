import React from 'react';

// import component
import RepositoryItem from './RepositoryItem';

//import css file
import "./Repositories.css"


const Repositories = () => {
    return (
        <div className="repositories__section">
            <h2>Repositories</h2>
            <RepositoryItem />
        </div>
    );
}

export default Repositories;
