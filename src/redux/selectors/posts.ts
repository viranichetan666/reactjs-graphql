import { RootState } from "redux/reducers";

export const getPostsData = (state: RootState) => {
    return {
        posts: state.posts.posts,
        total: state.posts.total
    }
}
