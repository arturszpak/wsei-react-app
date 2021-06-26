import { Dispatch } from 'redux';
import { PostsDispatchTypes, POSTS_FAIL, API_CALL_POSTS} from './postsActionsTypes';
import axios from 'axios';


export const GetPosts = () => async (dispatch:Dispatch<PostsDispatchTypes>) => {
    try{
        await axios.get("https://jsonplaceholder.typicode.com/posts").then((d)=>{
            dispatch({
                type: API_CALL_POSTS,
                payload: d.data
            })
        }).catch(e => console.error(e))

    }
    catch(e){
        dispatch({
            type: POSTS_FAIL
        })
    }
};