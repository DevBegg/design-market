import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './layout-slice/layout-slice';
import authSlice from './auth-slice/auth-slice';
// ...

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    authSlice: authSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
