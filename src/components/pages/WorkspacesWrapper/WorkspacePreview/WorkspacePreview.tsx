import { IMenu } from '../../../layout/ExpandedMenu/ExpandedMenu';
import './WorkspacePreview.scss';

const WorkspacePreview = (workspace: IMenu) => {
    return(
        <div className="workspacePreview sliderImg">
            <div className="workspacePreview__image">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/zoom-background-green-screen-smoke-orange-design-template-5d406471b060c66f32babe000ee69d31_screen.jpg?ts=1617600726" alt="img" />
            </div>
            <div className="workspacePreview__content">
                <div className="workspacePreview__content__header">
                    <div className="workspacePreview__content__icon">
                        <img src={`./assets/images/icons/${workspace.iconName}.png`} alt="icon" />
                    </div>
                    <h3 className="workspacePreview__content__name">
                       {workspace.name}
                    </h3>
                </div>
                <div className="workspacePreview__content__wrapper">
                    <div className="workspacePreview__content__info">
                        <span className="workspacePreview__content__icon small">
                            <img src={`./assets/images/icons/${workspace.iconName}.png`} alt="icon" />
                        </span>
                        <span className="workspacePreview__content__shortName">
                            Contract
                        </span>
                    </div>
                    <div className="workspacePreview__content__info">
                        <span className="workspacePreview__content__icon small">
                            <img src="./assets/images/icons/people.png" alt="icon" />
                        </span>
                        <span className="workspacePreview__content__shortName">
                            150 users
                        </span>
                    </div>
     
                </div>
                <p className="workspacePreview__content__updateTime">
                        Last update 2 days ago.
                </p>
            </div>
        </div>
    );
};

export default WorkspacePreview;