import './WorkspacesWrapper.scss';
import WorkspacePreview from './WorkspacePreview/WorkspacePreview';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { Link } from 'react-router-dom';
import { workspaceMenu, IMenu } from '../../layout/ExpandedMenu/ExpandedMenu';

const WorkspacesWrapper = () => {
    const workspacesList: IMenu[] = workspaceMenu;

    return(
        <div className="workspacesWrapper">
            <h2 className="workspacesWrapper__heading">Workspaces</h2>
            <Swiper slidesPerView={3}>
            {
                workspacesList.map((workspace:IMenu) =>
                    <SwiperSlide>
                        <Link to={`/Workspace/${workspace.name}`}>
                            <WorkspacePreview {...workspace}/>
                        </Link>

                    </SwiperSlide>
                    )
            }
            </Swiper>
        </div>
    );
};

export default WorkspacesWrapper;