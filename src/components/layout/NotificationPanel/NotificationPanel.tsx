import React from 'react';
import './NotificationPanel.scss';


function NotificationPanel(){
    return(
        <>
        <div className="mainNav__options">
            <div className="mainNav__options__item ">
                <img src="./assets/images/icons/house.png" alt="house"/>
            </div>
            <div className="mainNav__options__item background-circle notification">
                <img src="./assets/images/icons/comments.png" alt="comments"/>
            </div>
            <div className="mainNav__options__item background-circle notification">
                <img src="./assets/images/icons/bell.png" alt="bell"/>
            </div>
        </div>
        </>
    );
}

export default NotificationPanel;