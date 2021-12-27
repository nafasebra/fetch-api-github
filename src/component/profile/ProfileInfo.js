import React from 'react';

//import css file
import './InfoProfile.css';


const Profileinfo = () => {
    return (
        <div className="profileinfo__section">
            <div className="profileinfo__item">
                <div className="profileinfo__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33.75" height="32.378" viewBox="0 0 33.75 32.378">
                        <path id="star" d="M34.734,13.969a2.85,2.85,0,0,0-2.262-1.94L24.322,10.7,20.544,3.363a2.862,2.862,0,0,0-5.089,0L11.677,10.7l-8.15,1.324a2.862,2.862,0,0,0-1.572,4.839L7.77,22.73,6.511,30.89a2.86,2.86,0,0,0,4.117,2.991L18,30.162l7.372,3.719a2.861,2.861,0,0,0,4.117-2.991L28.23,22.73l5.815-5.862a2.85,2.85,0,0,0,.689-2.9Zm-2.287,1.315-6.614,6.668,1.432,9.282a.61.61,0,0,1-.88.639L18,27.642,9.615,31.873a.61.61,0,0,1-.88-.639l1.432-9.282L3.553,15.284a.612.612,0,0,1,.336-1.034l9.27-1.507,4.3-8.351a.611.611,0,0,1,1.087,0l4.3,8.351,9.27,1.507a.612.612,0,0,1,.336,1.034Z" transform="translate(-1.126 -1.811)" fill="#707070"/>
                    </svg>
                </div>
                <p className="profileinfo__number">100</p>
            </div>
            <div className="profileinfo__item">
                <div className="infoprofile__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 27 30">
                        <path id="bx-git-repo-forked" d="M8.338,13.283A7.322,7.322,0,0,0,12.969,19.4C16.5,20.744,16.5,21.8,16.5,22.5v.244a5.25,5.25,0,1,0,3,0V22.5c0-.7,0-1.756,3.531-3.1a7.327,7.327,0,0,0,4.631-6.118,5.256,5.256,0,1,0-3.026-.064A4.321,4.321,0,0,1,21.969,16.6,11.282,11.282,0,0,0,18,18.9a11.269,11.269,0,0,0-3.969-2.3,4.318,4.318,0,0,1-2.667-3.378,5.249,5.249,0,1,0-3.025.062ZM26.25,6A2.25,2.25,0,1,1,24,8.25,2.253,2.253,0,0,1,26.25,6Zm-6,21.75A2.25,2.25,0,1,1,18,25.5,2.253,2.253,0,0,1,20.25,27.75ZM9.75,6A2.25,2.25,0,1,1,7.5,8.25,2.253,2.253,0,0,1,9.75,6Z" transform="translate(-4.5 -3)" fill="#707070"/>
                    </svg>
                </div>
                <p className="infoprofile__number">100</p>
            </div>
            <div className="infoprofile__item">
                <div className="infoprofile__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="31.5" viewBox="0 0 22.5 31.5">
                        <g id="user" transform="translate(-6.75 -2.25)">
                            <path id="Path_1" data-name="Path 1" d="M18,4.5a5.625,5.625,0,1,1-5.625,5.625A5.625,5.625,0,0,1,18,4.5m0-2.25a7.875,7.875,0,1,0,7.875,7.875A7.875,7.875,0,0,0,18,2.25Z" fill="#707070"/>
                            <path id="Path_2" data-name="Path 2" d="M29.25,33.75H27V28.125A5.625,5.625,0,0,0,21.375,22.5h-6.75A5.625,5.625,0,0,0,9,28.125V33.75H6.75V28.125a7.875,7.875,0,0,1,7.875-7.875h6.75a7.875,7.875,0,0,1,7.875,7.875Z" fill="#707070"/>
                        </g>
                    </svg>
                </div>
                <p className="infoprofile__number">100</p>
            </div>
        </div>
    );
}

export default Profileinfo;
