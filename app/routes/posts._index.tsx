import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/post.server";
import { getUser } from "~/session.server";

/* ------------------------------------------------------- */

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ posts: await getPosts(), user: await getUser(request) });
};

/* ------------------------------------------------------- */

export default function Posts() {
  const { posts, user } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>Posts</h1>
      {user ? (
        <Link to="admin" className="text-red-600 underline">
          Admin
        </Link>
      ) : null}
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
