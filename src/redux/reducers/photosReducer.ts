import { API_CALL_PHOTOS } from "../actions/photosActionsTypes";

interface IDefaultState {
    photos: []
}

const defaultState: IDefaultState = {
    photos: []

};

const photosReducer = (state = defaultState, action: any): IDefaultState => {
    switch(action.type){
        case API_CALL_PHOTOS: 
        
            return {
                ...state,
                photos: action.payload
            }
        default:
            return state
    }
}

export default photosReducer;