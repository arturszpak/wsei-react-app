import { Dispatch } from 'redux';
import { CommentsDispatchTypes, COMMENTS_FAIL, API_CALL_COMMENTS} from './commentsActionsTypes';
import axios from 'axios';


export const GetComments = () => async (dispatch:Dispatch<CommentsDispatchTypes>) => {
    try{
        await axios.get("https://jsonplaceholder.typicode.com/comments").then((d)=>{
            dispatch({
                type: API_CALL_COMMENTS,
                payload: d.data
            })
        }).catch(e => console.error(e))

    }
    catch(e){
        dispatch({
            type: COMMENTS_FAIL
        })
    }
};