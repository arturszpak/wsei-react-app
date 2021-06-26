import './Workspace.scss';
import Resumes from '../Resumes/Resumes';


const Workspace = () => {

    return(
        <div className="workspace">
            <div className="workspace__header">
                <img src="https://eeward.com/wp-content/uploads/2019/04/furniture.jpg" alt="bbb"  className="workspace__header__background"/>
                <div className="workspace__header__contentWrapper">
                    <img src="/assets/images/icons/entities2.png" alt="workspace-img" className="workspace__header__img" />
                    <div className="workspace__header__content">
                        <h2>Corporate holdings</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odio corporis tenetur itaque nesciunt dolore officia a sequi, consequuntur eligendi!</p>
                        <i className="fas fa-cog"></i>
                    </div>

                </div>
            </div>
            <div className="workspace__actions">
                <h3 className="workspace__actions__header">Start working on corporate matters</h3>
                <div className="workspace__actionsWrapper">
                    <div className="workspace__action">
                        <img src="/assets/images/icons/entities.png" alt="entities" className="workspace__action__img"/>
                        <h2 className="workspace__action__header">Explore your <span className="bold">entities</span></h2>
                        <p className="workspace__action__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, earum perspiciatis ab mollitia repudiandae facere exercitationem debitis eaque corrupti qui?</p>
                    </div>
                    <div className="workspace__action">
                        <img src="/assets/images/icons/network.png" alt="ecosystem" className="workspace__action__img"/>
                        <h2 className="workspace__action__header">Explore your <span className="bold">entities</span></h2>
                        <p className="workspace__action__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, earum perspiciatis ab mollitia repudiandae facere exercitationem debitis eaque corrupti qui?</p>
                    </div>
                    <div className="workspace__action">
                        <img src="/assets/images/icons/people.png" alt="people" className="workspace__action__img"/>
                        <h2 className="workspace__action__header">Explore your <span className="bold">entities</span></h2>
                        <p className="workspace__action__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, earum perspiciatis ab mollitia repudiandae facere exercitationem debitis eaque corrupti qui?</p>
                    </div>
                </div>
            </div>
            <Resumes/>

        </div>
    );
}

export default Workspace;