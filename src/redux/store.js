import { CommentApi } from "./features/CommentSlice";
import { postApi } from "./features/PostSlice";
import { sharedLinkApi } from "./features/SharedLinkSlice";
import { usersApi } from "./features/UserSlice";
import fileLinkReducer from "../redux/features/FileLinkSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    fileLink: fileLinkReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [CommentApi.reducerPath]: CommentApi.reducer,
    [sharedLinkApi.reducerPath]: sharedLinkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      usersApi.middleware,
      postApi.middleware,
      CommentApi.middleware,
      sharedLinkApi.middleware,
    ]),
});
