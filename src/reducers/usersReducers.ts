import {ISingleUser } from '../entities/users';
import * as actionTypes from '../actions/actionTypes/userTypes'

export interface IUsersReducer{
    usersList: ISingleUser[];
    someData: string;
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    someData: 'Ala ma kota'
})

export default (state = defaultState(), action: any) => {
    switch(action.type){
        case action.type.GET_USERS:{
            const data: actionTypes.IUserTypes['GET_USERS'] = action;
            return{
                ...state,
                usersList: data.usersList
            }
        }

        case action.type.PUSH_DATA:{
            const data: actionTypes.IUserTypes['PUSH_DATA'] = action;
            return{
                ...state,
                someData: data.someData
            }
        }

        default: {
            return state
        }
            
    }
}