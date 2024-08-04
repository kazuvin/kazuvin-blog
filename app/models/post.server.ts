import { Post } from "@prisma/client";

import { prisma } from "~/db.server";
import { client } from "~/lib/micro-cms";

interface Eyecatch {
  url: string;
  height: number;
  width: number;
}

interface Category {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}

interface Article {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: Eyecatch;
  category: Category;
}

interface ListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

export async function getPosts() {
  return client.get<ListResponse<Article>>({ endpoint: "blogs" });
}

export async function getPost(slug: string) {
  return client.get<Article>({
    endpoint: "blogs",
    contentId: slug,
  });
  //   return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">,
) {
  return prisma.post.create({ data: post });
}

export async function updatePost(
  post: Pick<Post, "slug" | "title" | "markdown">,
) {
  return prisma.post.update({ where: { slug: post.slug }, data: post });
}

export async function deletePost(slug: string) {
  return prisma.post.delete({ where: { slug } });
}
