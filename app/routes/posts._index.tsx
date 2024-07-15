import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Link } from "~/components/ui/link";
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
      {user ? <Link to="admin">Admin</Link> : null}
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
