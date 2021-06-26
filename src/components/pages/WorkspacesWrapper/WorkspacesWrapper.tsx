import './WorkspacesWrapper.scss';
import WorkspacePreview from './WorkspacePreview/WorkspacePreview';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const WorkspacesWrapper = () => {



    return(
        <div className="workspacesWrapper">
            <h2 className="workspacesWrapper__heading">Workspaces</h2>
            
            <Swiper slidesPerView={3}>
                <SwiperSlide><WorkspacePreview /></SwiperSlide>
                <SwiperSlide><WorkspacePreview /></SwiperSlide>
                <SwiperSlide><WorkspacePreview /></SwiperSlide>
                <SwiperSlide><WorkspacePreview /></SwiperSlide>
                <SwiperSlide><WorkspacePreview /></SwiperSlide>
                <SwiperSlide><WorkspacePreview /></SwiperSlide>
                <SwiperSlide><WorkspacePreview /></SwiperSlide>
                <SwiperSlide><WorkspacePreview /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default WorkspacesWrapper;