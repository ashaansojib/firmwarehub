import { useDispatch } from "react-redux";
import { setFileLink } from "../redux/features/FileLinkSlice";

const dispatch = useDispatch();
export const setDownloadLink = (link) => {
  dispatch(setFileLink(link));
};
