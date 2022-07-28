import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPostEntity } from 'apollo/type/post';

export interface IPostReducer {
    posts: IPostEntity[] | undefined;
    total: number
  }
  

const initialState: IPostReducer = {
  posts: [],
  total: 0
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsData(state, action: PayloadAction<IPostReducer>) {
      return {
        ...state,
        posts: action.payload.posts,
        total: action.payload.total
      }
    },
  }
});

export const { setPostsData } = postSlice.actions;

export default postSlice.reducer;
