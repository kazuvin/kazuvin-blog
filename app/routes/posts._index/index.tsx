import { Link, useLoaderData } from "@remix-run/react";

import { DefaultLayout } from "~/components/layouts/default-layout";

import PostCard from "./_components/post-card";
import { postsLoader } from "./loader";

export const loader = postsLoader;

export default function Posts() {
  const { posts, user } = useLoaderData<typeof loader>();
  return (
    <DefaultLayout>
      <div className="container relative pt-12">
        <h1 id="posts" className="text-5xl font-bold mb-6">
          <Link to="#posts">Posts</Link>
        </h1>
        {user ? <Link to="admin">Admin</Link> : null}
        <section className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              to={post.slug}
              title={post.title}
              updatedAt={post.updatedAt}
            />
          ))}
        </section>
      </div>
    </DefaultLayout>
  );
}
