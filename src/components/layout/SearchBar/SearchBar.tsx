import React from 'react';
import './SearchBar.scss';


function SearchBar(){
    return(
        <>
        <div className="searchBar mainNav__element__searchBar">
            <input type="text" className="searchBar__input" placeholder="Search Legalcluster..."/>
            <img src="/assets/images/icons/search.png" alt="search-btn"/>
        </div>
        </>
    );
}

export default SearchBar;