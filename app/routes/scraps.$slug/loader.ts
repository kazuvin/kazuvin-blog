import { json, LoaderFunctionArgs } from "@remix-run/node";
import { marked } from "marked";
import invariant from "tiny-invariant";

import { getScrap } from "~/models/scrap/index.server";

export const scrapsSlugLoader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.slug, "params.slug is required");

  const scrap = await getScrap(params.slug);
  invariant(scrap, `Scrap not found: ${params.slug}`);

  const html = marked(scrap.content);

  return json({ html, scrap });
};
