import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import avatar from "~/assets/images/avatar.jpg";
import { DefaultLayout } from "~/components/layouts/default-layout";
import Hiri from "~/components/svg/hiri";
import Unit from "~/components/svg/union";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <DefaultLayout>
      <Unit
        className="fixed w-full h-full inset-0 opacity-30"
        preserveAspectRatio="none"
      />
      <div className="container relative py-12 z-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card
            as="section"
            className="flex flex-col justify-center col-span-1 h-80 backdrop-blur bg-background/30 cursor-pointer transition-transform z-10 hover:-translate-y-1"
          >
            <Link to="/about" className="flex-1">
              <CardHeader className="flex justify-center items-center">
                <img
                  src={avatar}
                  alt="kazuvin"
                  className="w-40 h-40 rounded-full object-cover mb-6"
                />
                <CardTitle>Kazuvin</CardTitle>
                <CardDescription>Developer / Composer</CardDescription>
              </CardHeader>
            </Link>
          </Card>
          <Card
            as="section"
            className="flex flex-col col-span-2 h-80 backdrop-blur bg-background/30 cursor-pointer transition-transform hover:-translate-y-1"
          >
            <Link to="/works" className="flex flex-1">
              <CardHeader>
                <CardTitle>Works</CardTitle>
                <CardDescription>作品集</CardDescription>
              </CardHeader>
              <CardContent className="relative w-full h-full overflow-hidden">
                <Hiri className="absolute -top-20 -right-64 w-[200%] h-[200%]" />
              </CardContent>
            </Link>
          </Card>
          <Card
            as="section"
            className="flex flex-col col-span-2 h-80 overflow-hidden backdrop-blur bg-background/30 cursor-pointer transition-transform hover:-translate-y-1"
          >
            <Link to="/posts" className="flex-1">
              <CardHeader>
                <CardTitle>Posts</CardTitle>
                <CardDescription>技術記事</CardDescription>
              </CardHeader>
            </Link>
          </Card>
          <Card
            as="section"
            className="flex flex-col col-span-1 backdrop-blur h-80 bg-background/30 cursor-pointer transition-transform hover:-translate-y-1"
          >
            <Link to="/scraps" className="flex-1">
              <CardHeader>
                <CardTitle>Scraps</CardTitle>
                <CardDescription>試作やメモなど</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
}
