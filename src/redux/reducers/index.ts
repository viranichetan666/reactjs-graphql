import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth';
import posts from './posts'

const rootReducer = combineReducers({
  auth,
  posts
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer