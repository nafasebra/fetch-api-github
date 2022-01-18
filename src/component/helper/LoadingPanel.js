import React from 'react';

// import css file component
import './LoadingPanel.css';


const Loadingpanel = () => {
    return (
        <div className="loading">
            <div className="loading__icon"></div>
            <p className="loading__text">loading...</p>
        </div>
    );
}

export default Loadingpanel;
