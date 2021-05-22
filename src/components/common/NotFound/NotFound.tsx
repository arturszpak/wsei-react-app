import React from 'react';
import './NotFound.scss';

const NotFound = () => {
    return(
        <>
            <div className="page">
                <h2 className="page__header">Error 404</h2>
                <p className="page__paragraph">Page was not found, please try again.</p>
            </div>
            
        </>
    );
};

export default NotFound;