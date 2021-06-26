import { API_CALL_COMMENTS } from "../actions/commentsActionsTypes";

export interface ICommentDefaultState {
    comments: []
}

const defaultState: ICommentDefaultState = {
    comments: []
};

const commentsReducer = (state = defaultState, action: any): ICommentDefaultState => {
    switch(action.type){
        case API_CALL_COMMENTS: 
        
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state
    }
}

export default commentsReducer;