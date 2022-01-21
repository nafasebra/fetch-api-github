import React, { useState } from 'react';

// import css filr
import './Pagination.css';

const Pagination = (props) => {

    const [isPrev, setIsPrev] = useState(true);
    const [isNext, setIsNext] = useState(true);

    const {
        prevFunc,
        nextFunc
    } = props;


    return (
        <div className="pagination__section">
            <button 
                className={`btn-link ${isPrev ? 'active' : ''}`}
                onClick={prevFunc}
            >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                <span>prev</span>
            </button>
            <button 
                className={`btn-link ${isNext ? 'active' : ''}`}
                onClick={nextFunc}
            >
                <span>next</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
        </div>
    );
}

export default Pagination;
