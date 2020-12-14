import { userReducer } from "./user/user-reducer";
import { postReducer } from "./post/post-reducer";

export function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        posts: postReducer(state.posts, action)
    }
}