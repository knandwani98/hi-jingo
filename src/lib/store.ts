import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "@/slices/sample.slice";
import boardReducer from "@/slices/boardSlice";

const store = configureStore({
  reducer: {
    sample: sampleReducer,
    board: boardReducer,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type StoreDispatch = typeof store.dispatch;

export default store;
