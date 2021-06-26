import ArticleEntry from '../ArticleEntry/ArticleEntry';
import LatestPublications from '../LatestPublications/LatestPublications';
import Resumes from '../Resumes/Resumes';
import WorkspacesWrapper from '../WorkspacesWrapper/WorkspacesWrapper';
import './MainPage.scss';

const MainPage = () => {

    return(
        <div className="MainPage">
            <div className="MainPage__header">
                <ArticleEntry />
                <LatestPublications />

            </div>
            <WorkspacesWrapper />
            <Resumes/>

        </div>
    );
}

export default MainPage;