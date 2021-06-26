import { API_CALL_USERS } from "../actions/userActionTypes";

export interface IUsersDefaultState {
    users: []
}

const defaultState: IUsersDefaultState = {
    users: []

};

const usersReducer = (state:IUsersDefaultState = defaultState, action: any): IUsersDefaultState => {
    switch(action.type){
        case API_CALL_USERS: 
        
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default usersReducer;