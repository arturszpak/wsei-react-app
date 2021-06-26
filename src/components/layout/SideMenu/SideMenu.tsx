import { Link } from 'react-router-dom';
import './SideMenu.scss';
import ProfilePreview from './ProfilePreview/ProfilePreview';

const SideMenu = () =>{

    return(
        <>
            <div className="userProfileWrapper">
                <div className="userProfile">

                <Link to={`/Profile`} className="userProfile__credentials">
                    <ProfilePreview />
                </Link>


                <div className="userProfile__menu">

                    <div className="userProfile__menu__wrapper">
                        <div className="userProfile__menu__wrapper__imgContainer">
                            <img src="./assets/images/icons/network.png" alt="my-network-icon"/>
                        </div>
                        <p className="userProfile__menu__wrapper__name">Your Network</p>
                        <a href="#" className="userProfile__menu__wrapper__btn">
                            <img src="./assets/images/icons/user-plus.png" alt="network-add-btn"/>
                        </a>
                    </div>
                    
                    <div className="userProfile__menu__wrapper">
                        <div className="userProfile__menu__wrapper__imgContainer">
                            <img src="./assets/images/icons/publications.png" alt="my-network-icon"/>
                        </div>
                        <p className="userProfile__menu__wrapper__name">Your Publications</p>
                        <a href="#" className="userProfile__menu__wrapper__btn">
                            <img src="./assets/images/icons/plus.png" alt="network-add-btn"/>
                        </a>
                    </div>
                </div>
                </div>
                <div className="userProfile__outer-menu">
                    <div className="userProfile__outer-menu__wrapper">
                        <div className="userProfile__outer-menu__wrapper__imgContainer">
                            <img src="./assets/images/icons/publications.png" alt="my-network-icon"/>
                        </div>
                        <p className="userProfile__outer-menu__wrapper__name">Publications</p>
                    </div>
                    <div className="userProfile__outer-menu__wrapper">
                        <div className="userProfile__outer-menu__wrapper__imgContainer">
                            <img src="./assets/images/icons/ecosystem.png" alt="my-network-icon"/>
                        </div>
                        <p className="userProfile__outer-menu__wrapper__name">Ecosystem</p>
                    </div>
                    <Link to={`/Entities`} className="userProfile__outer-menu__wrapper">
                            <div className="userProfile__outer-menu__wrapper__imgContainer">
                                <img src="./assets/images/icons/entities2.png" alt="my-network-icon"/>
                            </div>
                            <p className="userProfile__outer-menu__wrapper__name">Entities</p>
                    </Link>
                </div>
            </div>
            </>
     )            
}

export default SideMenu;