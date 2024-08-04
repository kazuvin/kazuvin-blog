import { json, LoaderFunctionArgs } from "@remix-run/node";
import { marked } from "marked";
import invariant from "tiny-invariant";

import { getPost } from "~/models/post/index.server";

export const postsSlugLoader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.slug, "params.slug is required");

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.content);

  return json({ html, post });
};
