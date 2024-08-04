import { Link } from "@remix-run/react";

import sampleImage from "~/assets/images/post-sample-image.jpg";
import { format } from "~/lib/date/format";

export interface PostCardProps {
  to: string;
  title: string;
  createdAt: string;
}

export default function PostCard({ to, title, createdAt }: PostCardProps) {
  return (
    <article className="transition-transform hover:-translate-y-1">
      <Link to={to}>
        <header className="mb-3 aspect-[16/9]">
          <img alt={title} src={sampleImage} className="rounded" />
        </header>
        <div className="flex flex-col">
          <time dateTime={createdAt} className="text-xs text-foreground/80">
            {format(new Date(createdAt), "yyyy年MM月dd日")}
          </time>
          <h3 className="font-semibold">{title}</h3>
        </div>
      </Link>
    </article>
  );
}
