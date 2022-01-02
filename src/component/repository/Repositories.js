import React from 'react';

// import component
import RepositoryItem from './RepositoryItem';

//import css file
import "./Repositories.css"


const Repositories = () => {
    return (
        <div className="repositories__section">
            <div className="repositories__title">
                <span classname="slash"></span>
                <h2>Last Repositories</h2>
            </div>
            
            <div className="repositories">
                 <RepositoryItem />
                 <RepositoryItem />
                 <RepositoryItem />
                 <RepositoryItem />
            </div>

            <div className="load-more">
                <p className="load-more__text">Load more</p>
                <div className="load-more__icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
            </div>
        </div>
    );
}

export default Repositories;
