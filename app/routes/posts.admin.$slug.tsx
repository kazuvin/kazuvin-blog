import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import invariant from "tiny-invariant";

import { Button } from "~/components/ui/button";
import { deletePost, getPost, updatePost } from "~/models/post.server";

/* ------------------------------------------------------- */

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.slug, "params.slug is required");

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  return json({ post });
};

/* ------------------------------------------------------- */

export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.slug, "params.slug is required");

  const formData = await request.formData();
  const actionType = formData.get("actionType");

  // update
  if (actionType === "update") {
    const slug = params.slug;
    const title = formData.get("title");
    const markdown = formData.get("markdown");

    const errors = {
      title: title ? null : "Title is required",
      markdown: markdown ? null : "markdown is required",
    };

    const hasError = Object.values(errors).some((errorMessage) => errorMessage);

    if (hasError) {
      return json(errors);
    }

    invariant(typeof title === "string", "title must be a string");
    invariant(typeof markdown === "string", "markdown must be a string");

    await updatePost({ title, slug, markdown });
  }

  // delete
  if (actionType === "delete") {
    const slug = params.slug;
    await deletePost(slug);
  }

  return redirect("/posts/admin");
};

/* ------------------------------------------------------- */

const inputClassName =
  "w-full rounded border border-gray-500 px-2 py-1 text-lg";

export default function AdminSlug() {
  const { post } = useLoaderData<typeof loader>();
  const errors = useActionData<typeof action>();

  const navigation = useNavigation();
  const isSubmitting = Boolean(navigation.state === "submitting");

  return (
    <Form key={post.slug} method="post">
      <p>
        <label>
          Post Title:{" "}
          {errors?.title ? (
            <em className="text-red-600">{errors.title}</em>
          ) : null}
          <input
            type="text"
            name="title"
            defaultValue={post.title}
            className={inputClassName}
          />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">
          Markdown:{" "}
          {errors?.markdown ? (
            <em className="text-red-600">{errors.markdown}</em>
          ) : null}
        </label>
        <br />
        <textarea
          id="markdown"
          rows={20}
          name="markdown"
          defaultValue={post.markdown}
          className={`${inputClassName} font-mono`}
        />
      </p>
      <p className="flex gap-2 justify-end">
        <Button
          type="submit"
          name="actionType"
          value="update"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating..." : "Update Post"}
        </Button>

        <Button
          type="submit"
          name="actionType"
          value="delete"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Deleting..." : "Delete Post"}
        </Button>
      </p>
    </Form>
  );
}
