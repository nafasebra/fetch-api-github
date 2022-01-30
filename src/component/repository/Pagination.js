import React, { useState } from 'react';

// import css filr
import './Pagination.css';

const Pagination = ( props ) => {

    let {
        prevFunc,
        nextFunc,
        isFirst,
        isLast
    } = props;

    return (
        <div className="pagination__section">
            <button 
                className={`btn-link ${isFirst ? 'deactive' : ''}`}
                onClick={prevFunc}
                disabled={isFirst}
            >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                <span>prev</span>
            </button>
            <button 
                className={`btn-link ${isLast ? 'deactive' : ''}`}
                onClick={nextFunc}
                disabled={isLast}
            >
                <span>next</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
        </div>
    );
}

export default Pagination;
