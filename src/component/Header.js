import React from 'react';

// import css file
import "./Header.css";


const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.213 35.329">
                        <path id="github" d="M18.107,0A17.714,17.714,0,0,1,27.2,2.428a18.023,18.023,0,0,1,6.59,6.59,17.714,17.714,0,0,1,2.428,9.089,17.6,17.6,0,0,1-3.454,10.645,17.74,17.74,0,0,1-8.924,6.543,1.057,1.057,0,0,1-.944-.165.921.921,0,0,1-.307-.707q0-.07.012-1.8t.012-3.171A4.2,4.2,0,0,0,21.383,26.1a16.188,16.188,0,0,0,2.416-.425,9.625,9.625,0,0,0,2.216-.919,6.58,6.58,0,0,0,1.909-1.568,7.314,7.314,0,0,0,1.249-2.476,11.891,11.891,0,0,0,.485-3.548A6.983,6.983,0,0,0,27.8,12.308,6.277,6.277,0,0,0,27.607,7.5a3.086,3.086,0,0,0-1.909.26,12.736,12.736,0,0,0-2.169,1.037l-.9.566a17.03,17.03,0,0,0-9.053,0q-.377-.26-1-.637a14.181,14.181,0,0,0-1.968-.908,3.243,3.243,0,0,0-2-.319,6.277,6.277,0,0,0-.189,4.809,6.983,6.983,0,0,0-1.863,4.857A11.784,11.784,0,0,0,7.036,20.7a7.553,7.553,0,0,0,1.239,2.476,6.389,6.389,0,0,0,1.9,1.579,9.576,9.576,0,0,0,2.216.919,16.25,16.25,0,0,0,2.416.425,3.981,3.981,0,0,0-1.155,2.428,4.711,4.711,0,0,1-1.061.354A6.591,6.591,0,0,1,11.246,29,2.788,2.788,0,0,1,9.7,28.492a4.144,4.144,0,0,1-1.309-1.474A3.8,3.8,0,0,0,7.25,25.792a3.452,3.452,0,0,0-1.167-.566l-.472-.07a1.539,1.539,0,0,0-.684.106q-.189.106-.118.272a1.3,1.3,0,0,0,.212.33,1.735,1.735,0,0,0,.307.283l.165.118a2.84,2.84,0,0,1,1.026.9,5.911,5.911,0,0,1,.742,1.2L7.5,28.9a2.988,2.988,0,0,0,1.037,1.45,3.676,3.676,0,0,0,1.579.707,9.971,9.971,0,0,0,1.639.165,7.024,7.024,0,0,0,1.309-.082l.542-.095q0,.9.012,2.086t.012,1.285a.921.921,0,0,1-.307.707,1.057,1.057,0,0,1-.944.165,17.734,17.734,0,0,1-8.924-6.543A17.6,17.6,0,0,1,0,18.107,17.714,17.714,0,0,1,2.428,9.018a18.023,18.023,0,0,1,6.59-6.59A17.714,17.714,0,0,1,18.107,0ZM6.86,26.005q.07-.165-.165-.283-.235-.07-.307.047-.07.165.165.283Q6.766,26.194,6.86,26.005Zm.731.8q.165-.118-.047-.377-.235-.212-.377-.07-.165.118.047.377Q7.45,26.972,7.592,26.807ZM8.3,27.868q.212-.165,0-.448-.189-.307-.4-.142-.212.118,0,.425T8.3,27.868Zm.99.99q.189-.189-.095-.448-.283-.283-.472-.07-.212.189.095.448Q9.1,29.07,9.289,28.858Zm1.344.589q.07-.26-.307-.377-.354-.095-.448.165t.307.354q.354.142.448-.142Zm1.486.118q0-.307-.4-.26-.377,0-.377.26,0,.307.4.26Q12.118,29.825,12.118,29.565Zm1.367-.235q-.047-.26-.425-.212-.377.07-.33.354t.425.189q.377-.095.33-.33Z"/>
                    </svg>
                </div>
                <h2 className="header__title">
                    fetch-api-github
                </h2>
            </div>
        </div>
    );
}

export default Header;
