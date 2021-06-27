import './PageNav.scss';
import SearchBar from './../SearchBar/SearchBar';
import NotificationPanel from './../NotificationPanel/NotificationPanel';
import {ExpandedMenu} from './..//ExpandedMenu/ExpandedMenu';
import useDropdown from 'react-dropdown-hook';

function PageNav(){

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    }

    return(
        <nav className="mainNav" >
            <div className="mainNav__logoContainer">
                <img src="/assets/images/logos/logo.png" alt="page-logo"/>
            </div>
            <div className="mainNav__dropdown" ref={wrapperRef} >
                 <div className="mainNav__select" onClick={menuHandler}>
                     <div>
                        <img className="mainNav__menu-icon" src="/assets/images/icons/house2.png" alt="home"/>
                        <span>Home</span>
                     </div>
                     <img src="/assets/images/icons/arrow-down.png" alt="arrow-down" className="mainNav__dropdown__arrow-down"/>
                 </div>
                {dropdownOpen &&
                    <ExpandedMenu/>
                }
            </div>
            <SearchBar />
            <NotificationPanel />
        </nav>
    );
}

export default PageNav;