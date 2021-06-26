import { Dispatch } from 'redux';
import { UsersDispatchTypes, USERS_FAIL, API_CALL_USERS} from './userActionTypes';
import axios from 'axios';


export const GetUsers = () => async (dispatch:Dispatch<UsersDispatchTypes>) => {
    try{
        await axios.get("https://jsonplaceholder.typicode.com/users").then((d)=>{
            dispatch({
                type: API_CALL_USERS,
                payload: d.data
            })
            console.log(d.data)
        }).catch(e => console.error(e))

    }
    catch(e){
        dispatch({
            type: USERS_FAIL
        })
    }
};