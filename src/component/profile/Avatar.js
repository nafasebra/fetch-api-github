import React from 'react';

// import css file
import "./Avatar.css";

const Avatar = () => {
    return (
        <div className="avatar">
            <div className='avatar__section'>
                <div className='avatar__image'>
                    <img src="https://f.vividscreen.info/soft/b17ba1c70bfc81338843522be541202c/Invisible-1440x1280.jpg" alt="avatar" />
                </div>
                <div className='avatar-name'>Nafas Ebrahimi</div>
            </div>
            <div className='avatar-aboutus'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eveniet.
            </div>
        </div>
    );
}

export default Avatar;
