import ArticleEntry from '../ArticleEntry/ArticleEntry';
import LatestPublications from '../LatestPublications/LatestPublications';
import WorkspacesWrapper from '../WorkspacesWrapper/WorkspacesWrapper';
import './MainPage.scss';

const MainPage = () =>{
    return(
        <div className="MainPage">
            <div className="MainPage__header">
                <ArticleEntry />
                <LatestPublications />
            </div>
            <div className="MainPage__workspaces">
                <h2 className="MainPage__workspaces__heading">Workspaces</h2>
                <WorkspacesWrapper />
            </div>

        </div>
    );
}

export default MainPage;