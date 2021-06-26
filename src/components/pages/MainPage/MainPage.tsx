import LatestPublications from '../LatestPublications/LatestPublications';
import Resumes from '../Resumes/Resumes';
import WorkspacesWrapper from '../WorkspacesWrapper/WorkspacesWrapper';
import './MainPage.scss';

const MainPage = () => {

    return(
        <div className="MainPage">
            <div className="MainPage__header">
                <LatestPublications />
            </div>
            <WorkspacesWrapper />
            <Resumes/>

        </div>
    );
}

export default MainPage;