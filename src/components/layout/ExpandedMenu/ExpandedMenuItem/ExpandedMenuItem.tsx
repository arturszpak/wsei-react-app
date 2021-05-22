import React, {FC} from 'react';

interface Props{
    name: string;
    iconName: string;
}

export const ExpandedMenuItem: FC<Props> = ({ name, iconName }) => {
    return(
        <>
            <li className="expandedMenu__menuList__element">
                <a href="#" className="expandedMenu__menuList__element__link">
                    <img src={`./assets/images/icons/${iconName}.png`} alt={iconName}/>
                    <span className="expandedMenu__menuList__element__name">
                        {name}
                    </span>
                </a>
            </li>
        </>
    );    
}