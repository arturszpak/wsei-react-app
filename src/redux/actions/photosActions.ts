import { Dispatch } from 'redux';
import { PhotosDispatchTypes, PHOTOS_FAIL, API_CALL_PHOTOS} from './photosActionsTypes';
import axios from 'axios';


export const GetPhotos = () => async (dispatch:Dispatch<PhotosDispatchTypes>) => {
    try{
        await axios.get("https://jsonplaceholder.typicode.com/photos").then((d)=>{
            dispatch({
                type: API_CALL_PHOTOS,
                payload: d.data
            })
        }).catch(e => console.error(e))

    }
    catch(e){
        dispatch({
            type: PHOTOS_FAIL
        })
    }
};