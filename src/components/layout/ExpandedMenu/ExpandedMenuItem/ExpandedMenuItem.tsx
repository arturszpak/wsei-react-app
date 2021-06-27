import React, {FC} from 'react';
import { Link } from 'react-router-dom';

interface Props{
    name: string;
    iconName: string;
}

export const ExpandedMenuItem: FC<Props> = ({ name, iconName }) => {
    return(
        <>
            <li className="expandedMenu__menuList__element">
                <Link to={`/${name.replace(/ +/g, "")}`} className="expandedMenu__menuList__element__link">
                    <img src={`/assets/images/icons/${iconName}.png`} alt={iconName}/>
                    <span className="expandedMenu__menuList__element__name">
                        {name}
                    </span>
                </Link>
            </li>
        </>
    );    
}