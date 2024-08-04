import { defer } from "@remix-run/node";

import { getPosts } from "~/models/post/index.server";

export const postsLoader = async () => {
  return defer({ postsPromise: getPosts() });
};
