import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

import { DefaultLayout } from "~/components/layouts/default-layout";
import Skelton from "~/components/ui/skelton";

import PostCard from "./_components/post-card";
import { postsLoader } from "./loader";

export const loader = postsLoader;

export default function Posts() {
  const { postsPromise } = useLoaderData<typeof loader>();
  return (
    <DefaultLayout>
      <div className="container relative py-12">
        <h1 id="posts" className="text-5xl font-bold mb-12">
          <Link to="#posts">Posts</Link>
        </h1>
        <section className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
          <Suspense
            fallback={Array(4)
              .fill(null)
              .map((_, index) => (
                <Skelton key={index} className="w-full h-full aspect-[16/9]" />
              ))}
          >
            <Await resolve={postsPromise}>
              {(posts) =>
                posts.contents.map((post) => (
                  <PostCard
                    key={post.id}
                    to={post.id}
                    title={post.title}
                    eyecatchUrl={post.eyecatch.url}
                    createdAt={post.createdAt}
                  />
                ))
              }
            </Await>
          </Suspense>
        </section>
      </div>
    </DefaultLayout>
  );
}
