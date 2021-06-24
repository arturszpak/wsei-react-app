import './WorkspacePreview.scss';

const WorkspacePreview = () => {
    return(
        <div className="workspace sliderImg">
            <div className="workspace__image">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/zoom-background-green-screen-smoke-orange-design-template-5d406471b060c66f32babe000ee69d31_screen.jpg?ts=1617600726" alt="img" />
            </div>
            <div className="workspace__content">
                <div className="workspace__content__header">
                    <div className="workspace__content__icon">
                        <img src="./assets/images/icons/entities.png" alt="icon" />
                    </div>
                    <h3 className="workspace__content__name">
                        Client contract
                    </h3>
                </div>
                <div className="workspace__content__wrapper">
                    <div className="workspace__content__info">
                        <span className="workspace__content__icon small">
                            <img src="./assets/images/icons/entities.png" alt="icon" />
                        </span>
                        <span className="workspace__content__shortName">
                            Contract
                        </span>
                    </div>
                    <div className="workspace__content__info">
                        <span className="workspace__content__icon small">
                            <img src="./assets/images/icons/people.png" alt="icon" />
                        </span>
                        <span className="workspace__content__shortName">
                            150 users
                        </span>
                    </div>
     
                </div>
                <p className="workspace__content__updateTime">
                        Last update 2 days ago.
                </p>
            </div>
        </div>
    );
};

export default WorkspacePreview;