import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "@/slices/sample.slice";

const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type StoreDispatch = typeof store.dispatch;

export default store;
