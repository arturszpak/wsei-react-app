export const USERS_LOADING = "USERS_LOADING";
export const USERS_FAIL = "USERS_FAIL";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const API_CALL_USERS = "API_CALL_USERS";

export interface UsersContent {
    id: number,
    name: string,
    username: string,
    email: string,
    address:{
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo:{
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company:{
        name: string,
        catchPhrase: string,
        bs: string 
    }
}

export interface IAPICALL{
    type: typeof API_CALL_USERS
}

export interface IUsersLoading{
    type: typeof USERS_LOADING,

}

export interface IUsersFail{
    type: typeof USERS_FAIL
}

export interface IUsersSuccess{
    type: typeof USERS_SUCCESS,
    payload: {
        content: UsersContent[]
    }
}

export type UsersDispatchTypes = IUsersLoading | IUsersFail | IUsersSuccess | IAPICALL;