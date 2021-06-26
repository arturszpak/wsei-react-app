import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import photosReducer from "./photosReducer";

const RootReducer = combineReducers({ posts: postsReducer, users: usersReducer, comments: commentsReducer, photos: photosReducer })

export type RootState = ReturnType<typeof RootReducer>

export default RootReducer;