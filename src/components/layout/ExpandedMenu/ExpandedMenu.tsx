import React, {FC, useState, useEffect} from 'react';
import './ExpandedMenu.scss';
import {ExpandedMenuItem} from './ExpandedMenuItem/ExpandedMenuItem';


export const ExpandedMenu: FC = () =>{

    let platformMenuFiltered: any;
    let workspaceMenuFiltered: any;

    const platformMenu: any[] = [
        { name: "Home", iconName: "house2" },
        { name: "Publications", iconName: "publications" },
        { name: "People", iconName: "people" },
        { name: "Entities", iconName: "entities2" },
        { name: "Administration", iconName: "administration" }
    ]; 

    const workspaceMenu: any[] = [
        { name: "Client contract", iconName: "house2" },
        { name: "Supplier contract", iconName: "publications" },
        { name: "Corporate", iconName: "people" },
        { name: "Group Norms", iconName: "entities2" },
        { name: "Real Estate contracts", iconName: "administration" }
    ];

    const [publicationsElements, setPublicationsElements] = useState([]); 
    const [workspaceElements, setWorkspaceElements] = useState([]); 

    useEffect(() => {
        updateData();
    }, []);

    const updateData = (e?: any) =>{
        let inputValue: string;

        if(e == undefined)
            inputValue = "";
        else inputValue = e.target.value.toLowerCase();

        platformMenuFiltered = platformMenu.filter((el) =>el.name.toLowerCase().includes(inputValue.toLowerCase()));
        workspaceMenuFiltered = workspaceMenu.filter((el) =>el.name.toLowerCase().includes(inputValue.toLowerCase()));
        setPublicationsElements(platformMenuFiltered);
        setWorkspaceElements(workspaceMenuFiltered);
    }

    return(
        <>
            <div className="expandedMenu">
                <div className="expandedMenu__filter">
                    <input type="text" placeholder="Filter..." className="expandedMenu__filter__input"
                    onChange={(e) =>{
                        updateData(e)
                    }
                    } />
                </div>
                <h4 className="expandedMenu__header">
                    Platform
                </h4>
                <ul className="expandedMenu__menuList">
                    {
                        publicationsElements.map(function(el:any){
                            return(
                                <ExpandedMenuItem name={el.name} iconName={el.iconName} />
                            )
                        })
                    }
                </ul>
                <h4 className="expandedMenu__header">
                    Workspaces
                </h4>
                <ul className="expandedMenu__menuList">
                    {
                         workspaceElements.map(function(el:any){
                            return(
                                <ExpandedMenuItem name={el.name} iconName={el.iconName} />
                            )
                        })
                    }
                </ul>
                <h4 className="expandedMenu__header">
                    Account
                </h4>
                <ul className="expandedMenu__menuList">
                    <div className="expandedMenu__account">
                        <div className="expandedMenu__account__avatar-wrapper">
                            <img 
                            src="https://blog.przenosne.pl/wp-content/uploads/2016/12/Linux-Avatar.png" 
                            alt="user-avatar"/>
                        </div>
                        <div>
                            <span className="expandedMenu__account__name">
                                Hilberta Zuckerberg
                            </span>
                            <a className="expandedMenu__account__link" href="#">See profile</a>
                        </div>
                    </div>
                    <ExpandedMenuItem name="Privacy" iconName="privacy" />
                    <ExpandedMenuItem name="Settings" iconName="settings" />
                    <div className="expandedMenu__logout">
                        <a href="#" className="expandedMenu__logout__link">
                            <img src="./assets/images/icons/logout.png" alt="logout" className="expandedMenu__logout__img"/>
                            <span className="expandedMenu__logout__text">Logout</span>
                        </a>
                        
                    </div>
                </ul>
            </div>
          
        </>
    );
}
