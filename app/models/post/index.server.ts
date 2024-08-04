import { client } from "~/lib/micro-cms";
import { ListResponse } from "~/types";

import { Post } from "./type";

export async function getPosts() {
  return client.get<ListResponse<Post>>({ endpoint: "blogs" });
}

export async function getPost(slug: string) {
  return client.get<Post>({
    endpoint: "blogs",
    contentId: slug,
  });
}
