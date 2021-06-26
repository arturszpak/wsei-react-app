import { API_CALL_POSTS } from "../actions/postsActionsTypes";

interface IDefaultState {
    posts: []
}

const defaultState: IDefaultState = {
    posts: []

};

const postsReducer = (state = defaultState, action: any): IDefaultState => {
    switch(action.type){
        case API_CALL_POSTS: 
        
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}

export default postsReducer;