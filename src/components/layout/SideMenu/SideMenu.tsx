import React, { Component } from 'react';
import './SideMenu.scss';


interface IUserData{
    userName: string,
    userAvatar: string,
    userJobTitle: string,
    userCompany: string,
}

interface S{
    userData: IUserData
}

class SideMenu extends Component<any, S> {

    constructor(props: any){
        super(props);
        this.getUsers();
        this.state = {userData: null}
    }

  
    getUsers(){
        const randomizeUser: number = Math.floor(Math.random() *10 +1);
        fetch(`https://jsonplaceholder.typicode.com/users/${randomizeUser}`).then((d) => d.json()).then(data => {
        const userData = {
            userName: data.name,
            userAvatar: "https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg",
            userJobTitle: "manager",
            userCompany: data.company.name,
        }
        this.setState({userData});
      });
    
    }

    render(){
        const userData= this.state.userData;
        return(
            <div>
                <div className="userProfile">

                <div className="userProfile__credentials">
                    <div className="userProfile__credentials__avatar">
                        <img src={userData?.userAvatar} alt="user-avatar"/>
                    </div>
                    <h2 className="userProfile__credentials__name">{userData?.userName || "John Doe"}</h2>
                    <p className="userProfile__credentials__job">{userData?.userJobTitle || "Job title"} - {userData?.userCompany || "Company"}</p>
                </div>

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
                <div className="userProfile__outer-menu__wrapper">
                    <div className="userProfile__outer-menu__wrapper__imgContainer">
                        <img src="./assets/images/icons/entities2.png" alt="my-network-icon"/>
                    </div>
                    <p className="userProfile__outer-menu__wrapper__name">Entities</p>
                </div>
                </div>
            </div>
            
     )
    }              
}

export default SideMenu;