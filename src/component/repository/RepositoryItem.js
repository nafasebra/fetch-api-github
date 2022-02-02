import React from 'react';

// import css file
import "./RepositoryItem.css";


const Repositoryitem = (props) => {

    const {
        name,
        description,
        forkCount,
        starCount,
        watchCount,
        topics
    } = props;

    return (
        <div className="repositoryitem">
            <h2 className="repositoryitem__title">
                {name}
            </h2>
            <p className="repositoryitem__desc">
                {description}
            </p>
            <div className="topics">
                {topics.map((item, index) => <div key={index} className="topics__item">{item}</div>)}
            </div>
            <div className="repository-info">
                <div className="repository-info__item">
                    <div className="repository-info__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.75 32.378">
                            <path id="star" d="M34.734,13.969a2.85,2.85,0,0,0-2.262-1.94L24.322,10.7,20.544,3.363a2.862,2.862,0,0,0-5.089,0L11.677,10.7l-8.15,1.324a2.862,2.862,0,0,0-1.572,4.839L7.77,22.73,6.511,30.89a2.86,2.86,0,0,0,4.117,2.991L18,30.162l7.372,3.719a2.861,2.861,0,0,0,4.117-2.991L28.23,22.73l5.815-5.862a2.85,2.85,0,0,0,.689-2.9Zm-2.287,1.315-6.614,6.668,1.432,9.282a.61.61,0,0,1-.88.639L18,27.642,9.615,31.873a.61.61,0,0,1-.88-.639l1.432-9.282L3.553,15.284a.612.612,0,0,1,.336-1.034l9.27-1.507,4.3-8.351a.611.611,0,0,1,1.087,0l4.3,8.351,9.27,1.507a.612.612,0,0,1,.336,1.034Z" transform="translate(-1.126 -1.811)" fill="#707070"/>
                        </svg>
                    </div>
                    <p className="repository-info__text">
                        {starCount}
                    </p>
                </div>
                <div className="repository-info__item">
                    <div className="repository-info__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 30">
                            <path id="bx-git-repo-forked" d="M8.338,13.283A7.322,7.322,0,0,0,12.969,19.4C16.5,20.744,16.5,21.8,16.5,22.5v.244a5.25,5.25,0,1,0,3,0V22.5c0-.7,0-1.756,3.531-3.1a7.327,7.327,0,0,0,4.631-6.118,5.256,5.256,0,1,0-3.026-.064A4.321,4.321,0,0,1,21.969,16.6,11.282,11.282,0,0,0,18,18.9a11.269,11.269,0,0,0-3.969-2.3,4.318,4.318,0,0,1-2.667-3.378,5.249,5.249,0,1,0-3.025.062ZM26.25,6A2.25,2.25,0,1,1,24,8.25,2.253,2.253,0,0,1,26.25,6Zm-6,21.75A2.25,2.25,0,1,1,18,25.5,2.253,2.253,0,0,1,20.25,27.75ZM9.75,6A2.25,2.25,0,1,1,7.5,8.25,2.253,2.253,0,0,1,9.75,6Z" transform="translate(-4.5 -3)" fill="#707070"/>
                        </svg>
                    </div>
                    <p className="repository-info__text">
                        {forkCount}
                    </p>
                </div>
                <div className="repository-info__item">
                    <div className="repository-info__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" viewBox="0 0 24 24" stroke-width="1.5" stroke="#212121" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="2" />
                            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                        </svg>
                    </div>
                    <p className="repository-info__text">
                        {watchCount}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Repositoryitem;
