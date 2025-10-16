import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './playerSlice'
import backendReducer from './backendSlice'


const store = configureStore({
  reducer: {
    player: playerReducer,
    backend: backendReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store