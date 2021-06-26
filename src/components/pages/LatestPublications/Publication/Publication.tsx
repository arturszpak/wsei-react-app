import { useSelector } from 'react-redux';
import { PhotosContent } from '../../../../redux/actions/photosActionsTypes';
import { PostsContent } from '../../../../redux/actions/postsActionsTypes';
import { UsersContent } from '../../../../redux/actions/userActionTypes';
import { RootState } from '../../../../redux/reducers';
import './Publication.scss';

const Publication = () => {
    const photosState: PhotosContent[] = useSelector<RootState, PhotosContent[]>((state: RootState)=> state.photos.photos)
    const usersState: UsersContent[] = useSelector<RootState, UsersContent[]>((state: RootState)=> state.users.users)
    const postsState: PostsContent[] = useSelector<RootState, PostsContent[]>((state: RootState)=> state.posts.posts)


    return(
        <div className="article">
            <div className="article__image">
            {
                photosState.slice(0,1).map(photo => <img src={photo.thumbnailUrl} alt="user-avatar"/>)
            }
            </div>
            <div className="article__content">
                {
                    postsState.slice(0,1).map(post =>  <p className="article__paragraph">{post.title}</p>)
                }
                <div className="article__info">
                    <span className="article__date">21 jan. 2020</span>
                    <span className="article__publisherAvatar">
                    {
                        photosState.slice(0,1).map(photo => <img src={photo.thumbnailUrl} alt="user-avatar"/>)
                    }
                    </span>
                    {usersState.slice(0,1).map(user => (
                        <span className="article__publisherName">{user.name}</span>
                    ))}
                    
                </div>
            </div>

        </div>
    );
};

export default Publication;