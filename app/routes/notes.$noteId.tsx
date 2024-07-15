import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { defer, redirect } from "@remix-run/node";
import {
  Await,
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { Suspense } from "react";
import invariant from "tiny-invariant";

import { deleteNote, getNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";

/* ------------------------------------------------------- */

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const userId = await requireUserId(request);
  invariant(params.noteId, "noteId not found");

  // TODO: Prisma Client API は Promise を返却しないため上手くハンドリングして defer と Suspense を機能させるよう修正する
  const note = getNote({ id: params.noteId, userId }).then((res) => res);

  // if (!note) {
  //   throw new Response("Not Found", { status: 404 });
  // }

  return defer({ note });
};

/* ------------------------------------------------------- */

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const userId = await requireUserId(request);
  invariant(params.noteId, "noteId not found");

  await deleteNote({ id: params.noteId, userId });

  return redirect("/notes");
};

/* ------------------------------------------------------- */

export default function NoteDetailsPage() {
  const { note } = useLoaderData<typeof loader>();

  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Await resolve={note}>
          {(note) => (
            <>
              <h3 className="text-2xl font-bold">{note?.title}</h3>
              <p className="py-6">{note?.body}</p>
            </>
          )}
        </Await>
      </Suspense>
      <hr className="my-4" />
      <Form method="post">
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Delete
        </button>
      </Form>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return <div>An unexpected error occurred: {error.message}</div>;
  }

  if (!isRouteErrorResponse(error)) {
    return <h1>Unknown Error</h1>;
  }

  if (error.status === 404) {
    return <div>Note not found</div>;
  }

  return <div>An unexpected error occurred: {error.statusText}</div>;
}
