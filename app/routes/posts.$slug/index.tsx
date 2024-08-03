import { useLoaderData } from "@remix-run/react";

import { DefaultLayout } from "~/components/layouts/default-layout";

import { postsSlugLoader } from "./loader";

export const loader = postsSlugLoader;

export default function PostSlug() {
  const { html, post } = useLoaderData<typeof loader>();
  return (
    <DefaultLayout>
      <div className="container relative">
        <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </DefaultLayout>
  );
}
