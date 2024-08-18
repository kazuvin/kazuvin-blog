import type { MetaFunction } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

import Container from "~/components/layouts/container";
import { DefaultLayout } from "~/components/layouts/default-layout";
import { TemplateHeader, TemplateTitle } from "~/components/layouts/template";
import Skelton from "~/components/ui/skelton";

import ScrapCard from "./_components/scrap-card";
import { scrapsLoader } from "./loader";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export const loader = scrapsLoader;

export default function Index() {
  const { scrapsPromise } = useLoaderData<typeof loader>();
  return (
    <DefaultLayout>
      <Container className="py-12">
        <TemplateHeader>
          <TemplateTitle id="scraps">
            <Link to="#scraps">Scraps</Link>
          </TemplateTitle>
        </TemplateHeader>
        <section className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
          <Suspense
            fallback={Array(4)
              .fill(null)
              .map((_, index) => (
                <Skelton key={index} className="w-full h-full aspect-[16/9]" />
              ))}
          >
            <Await resolve={scrapsPromise}>
              {(scraps) =>
                scraps.contents.map((scrap) => (
                  <ScrapCard
                    key={scrap.id}
                    to={scrap.id}
                    title={scrap.title}
                    emoji={scrap.emoji}
                    createdAt={scrap.createdAt}
                  />
                ))
              }
            </Await>
          </Suspense>
        </section>
      </Container>
    </DefaultLayout>
  );
}
