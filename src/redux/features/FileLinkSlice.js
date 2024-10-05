import { createSlice } from "@reduxjs/toolkit";

const FileLinkSlice = createSlice({
  name: "fileLink",
  initialState: {
    link: "",
  },
  reducers: {
    setFileLink: (state, action) => {
      state.link = action.payload;
    },
  },
});
export const { setFileLink } = FileLinkSlice.actions;
export default FileLinkSlice.reducer;
