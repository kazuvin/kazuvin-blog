import { useLoaderData } from "@remix-run/react";

import { DefaultLayout } from "~/components/layouts/default-layout";
import { format } from "~/lib/date/format";

import { scrapsSlugLoader } from "./loader";

export const loader = scrapsSlugLoader;

export default function ScrapSlug() {
  const { html, scrap } = useLoaderData<typeof loader>();
  return (
    <DefaultLayout>
      <article className="px-8 py-12 max-w-screen-md mx-auto relative">
        <header className="mb-20 flex flex-col items-center gap-12">
          <time dateTime={scrap.createdAt}>
            {format(new Date(scrap.createdAt), "yyyy/MM/dd")}
          </time>
          <div className="flex justify-center items-center text-5xl w-28 h-28 rounded-full bg-gray-100">
            {scrap.emoji}
          </div>
          <h1 className="text-2xl font-bold text-center lg:text-5xl lg:leading-normal">
            {scrap.title}
          </h1>
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="prose dark:prose-invert"
        />
      </article>
    </DefaultLayout>
  );
}
