export const POSTS_LOADING = "POSTS_LOADING";
export const POSTS_FAIL = "POSTS_FAIL";
export const POSTS_SUCCESS = "POSTS_SUCCESS";
export const API_CALL_POSTS = "API_CALL_POSTS";

export type PostsContent = {
    userId: number,
    id: number,
    title: string,
    body: string
} 

export interface IAPICALL{
    type: typeof API_CALL_POSTS
}

export interface IPostsLoading{
    type: typeof POSTS_LOADING,

}

export interface IPostsFail{
    type: typeof POSTS_FAIL
}

export interface IPostsSuccess{
    type: typeof POSTS_SUCCESS,
    payload: {
        content: PostsContent[]
    }
}

export type PostsDispatchTypes = IPostsLoading | IPostsSuccess | IPostsFail | IAPICALL;