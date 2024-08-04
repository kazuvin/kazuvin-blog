import { useLoaderData } from "@remix-run/react";

import { DefaultLayout } from "~/components/layouts/default-layout";
import { format } from "~/lib/date/format";

import { postsSlugLoader } from "./loader";

export const loader = postsSlugLoader;

export default function PostSlug() {
  const { html, post } = useLoaderData<typeof loader>();
  return (
    <DefaultLayout>
      <article className="px-8 py-12 max-w-screen-md mx-auto relative">
        <header className="mb-20 flex flex-col items-center gap-12">
          <time dateTime={post.createdAt}>
            {format(new Date(post.createdAt), "yyyy/MM/dd")}
          </time>
          <h1 className="text-2xl font-bold text-center lg:text-5xl lg:leading-normal">
            {post.title}
          </h1>
          <img
            alt={post.title}
            src={post.eyecatch.url}
            className="rounded aspect-video w-full h-90"
          />
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="prose dark:prose-invert"
        />
      </article>
    </DefaultLayout>
  );
}
