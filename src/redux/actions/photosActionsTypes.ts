export const PHOTOS_LOADING = "PHOTOS_LOADING";
export const PHOTOS_FAIL = "PHOTOS_FAIL";
export const PHOTOS_SUCCESS = "PHOTOS_SUCCESS";
export const API_CALL_PHOTOS = "API_CALL_PHOTOS";

export type PhotosContent = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
} 

export interface IAPICALL{
    type: typeof API_CALL_PHOTOS
}

export interface IPhotosLoading{
    type: typeof PHOTOS_LOADING
}

export interface IPhotosFail{
    type: typeof PHOTOS_FAIL
}

export interface IPhotosSuccess{
    type: typeof PHOTOS_SUCCESS,
    payload: {
        content: PhotosContent[]
    }
}

export type PhotosDispatchTypes = IPhotosLoading | IPhotosSuccess | IPhotosFail | IAPICALL;