import React from 'react';

// import css file
import './NotExistPanel.css';

// import asset file
import image from './../../assets/ghost.png';


const NotExistPanel = ({ notExistText }) => {
    return (
        <div className="NotExist__section">
            <img src={image} alt="ghost--notexist" />
            <p className="NotExist__text">
                {notExistText}
            </p>
        </div>
    );
}

export default NotExistPanel;
