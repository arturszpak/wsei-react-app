import {FC, useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PhotosContent } from '../../../redux/actions/photosActionsTypes';
import { UsersContent } from '../../../redux/actions/userActionTypes';
import { RootState } from '../../../redux/reducers';
import './ExpandedMenu.scss';
import {ExpandedMenuItem} from './ExpandedMenuItem/ExpandedMenuItem';


export interface IMenu{
    name: string,
    iconName: string
}

const platformMenu: IMenu[] = [
    { name: "Home", iconName: "house2" },
    { name: "Publications", iconName: "publications" },
    { name: "People", iconName: "people" },
    { name: "Entities", iconName: "entities2" },
    { name: "Administration", iconName: "administration" }
]; 

export const workspaceMenu: IMenu[] = [
    { name: "Client Contract", iconName: "house2" },
    { name: "Supplier Contract", iconName: "publications" },
    { name: "Corporate", iconName: "people" },
    { name: "Group Norms", iconName: "entities2" },
    { name: "Real Estate Contracts", iconName: "administration" }
];

export const ExpandedMenu: FC = () =>{

    const photosState: PhotosContent[] = useSelector<RootState, PhotosContent[]>((state: RootState)=> state.photos.photos)
    const usersState: UsersContent[] = useSelector<RootState, UsersContent[]>((state: RootState)=> state.users.users)

    let platformMenuFiltered: any;
    let workspaceMenuFiltered: any;

    const [publicationsElements, setPublicationsElements] = useState([]); 
    const [workspaceElements, setWorkspaceElements] = useState([]); 

    useEffect(() => {
        updateData();
    }, []);

    const updateData = (e?: any) =>{
        let inputValue: string;

        if(e === undefined)
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
                            {
                                photosState.slice(0,1).map(photo => <img src={photo.thumbnailUrl} alt="user-avatar"/>)
                            }
                        </div>
                        <div>
                            <span className="expandedMenu__account__name">
                            {usersState.slice(0,1).map(user => (
                                user.name || "John Doe"
                            ))}
                            </span>
                            <Link to={`/Profile`} className="expandedMenu__account__link">
                                See Profile
                            </Link>
                        </div>
                    </div>
                    <ExpandedMenuItem name="Privacy" iconName="privacy" />
                    <ExpandedMenuItem name="Settings" iconName="settings" />
                    <div className="expandedMenu__logout">
                        <Link to={`/Logout`} className="expandedMenu__logout__link">
                            <img src="/assets/images/icons/logout.png" alt="logout" className="expandedMenu__logout__img"/>
                            <span className="expandedMenu__logout__text">Logout</span>
                        </Link>
                    </div>
                </ul>
            </div>
          
        </>
    );
}
