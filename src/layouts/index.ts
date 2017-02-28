import Homepage from "./Homepage";
import Page from "./Page";
import PageError from "./PageError";
import Post from "./Post";

const layouts = {
  Homepage,
  Page,
  PageError,
  Post
};

export type LayoutNames = keyof typeof layouts;

export default layouts;