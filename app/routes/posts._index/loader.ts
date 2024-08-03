import { json, LoaderFunctionArgs } from "@remix-run/node";

import { getPosts } from "~/models/post.server";
import { getUser } from "~/session.server";

export const postsLoader = async ({ request }: LoaderFunctionArgs) => {
  return json({ posts: await getPosts(), user: await getUser(request) });
};
