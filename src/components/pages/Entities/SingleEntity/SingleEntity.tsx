import './SingleEntity.scss';
import IEntityProps from '../IEntityProps';
import { PhotosContent } from '../../../../redux/actions/photosActionsTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers';

const SingleEntity = ({ title, content }: IEntityProps) => {

    const photosState: PhotosContent[] = useSelector<RootState, PhotosContent[]>((state: RootState)=> state.photos.photos)

    return (
        <div className="entity">
            <div className="entity__imgContainer">
            {

                photosState.slice(8, 9).map(photo => <img src={photo.thumbnailUrl} alt="img" className="entity__img"/>)
            }
            </div>

            <div className="entity__content">
                <h2 className="entity__title">{title}</h2>
                <p className="entity__desc">{content}</p>
            </div>
        </div>
    );
}

export default SingleEntity;