export const COMMENTS_LOADING = "COMMENTS_LOADING";
export const COMMENTS_FAIL = "COMMENTS_FAIL";
export const COMMENTS_SUCCESS = "COMMENTS_SUCCESS";
export const API_CALL_COMMENTS = "API_CALL_COMMENTS";

export type CommentsContent ={
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface IAPICALL{
    type: typeof API_CALL_COMMENTS
}

export interface ICommentsLoading{
    type: typeof COMMENTS_LOADING,

}

export interface ICommentsFail{
    type: typeof COMMENTS_FAIL
}

export interface ICommentsSuccess{
    type: typeof COMMENTS_SUCCESS,
    payload: {
        content: CommentsContent[]
    }
}

export type CommentsDispatchTypes = ICommentsLoading | ICommentsFail | ICommentsSuccess | IAPICALL;