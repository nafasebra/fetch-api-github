import React from 'react';

// import css file component
import './LoadingPanel.css';


const LoadingPanel = () => {
    return (
        <div className="loading">
            <div className="loading__icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p className="loading__text">loading...</p>
        </div>
    );
}

export default LoadingPanel;
