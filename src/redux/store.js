import { CommentApi } from "./features/CommentSlice";
import { postApi } from "./features/PostSlice";
import { usersApi } from "./features/UserSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [CommentApi.reducerPath]: CommentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      usersApi.middleware,
      postApi.middleware,
      CommentApi.middleware,
    ]),
});
