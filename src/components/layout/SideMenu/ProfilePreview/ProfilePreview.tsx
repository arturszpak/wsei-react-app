import { useSelector } from "react-redux";
import { PhotosContent } from "../../../../redux/actions/photosActionsTypes";
import { UsersContent } from "../../../../redux/actions/userActionTypes";
import { RootState } from "../../../../redux/reducers";

const ProfilePreview = () => {
    const photosState: PhotosContent[] = useSelector<RootState, PhotosContent[]>((state: RootState)=> state.photos.photos)
    const usersState: UsersContent[] = useSelector<RootState, UsersContent[]>((state: RootState)=> state.users.users)
    
    return (
        <>
                {usersState.slice(0,1).map(user => (
                    <>
                        <div className="userProfile__credentials__avatar" key={user.id}>
                            {
                                photosState.slice(0,1).map(photo => <img src={photo.thumbnailUrl} alt="user-avatar"/>)
                            }
                            
                        </div>
                        <h2 className="userProfile__credentials__name">{user.name || "John Doe"}</h2>
                        <p className="userProfile__credentials__job">Manager - {user.company.name || "Company"}</p>
                    </>
                ))}
        </>
    )
}

export default ProfilePreview;


