import './WorkspacesWrapper.scss';
import Workspace from './WorkspacePreview/WorkspacePreview';

const WorkspacesWrapper = () => {
    return(
        <div className="workspacesWrapper">
            <Workspace />
            <Workspace />
            <Workspace />
        </div>
    );
};

export default WorkspacesWrapper;