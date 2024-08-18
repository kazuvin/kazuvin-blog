import { Link } from "@remix-run/react";

import { format } from "~/lib/date/format";

export interface ScrapCardProps {
  to: string;
  title: string;
  emoji: string;
  createdAt: string;
}

export default function ScrapCard({
  to,
  title,
  emoji,
  createdAt,
}: ScrapCardProps) {
  return (
    <article className="transition-transform hover:-translate-y-1">
      <Link to={to}>
        <header className="mb-3 aspect-[16/9]">
          <div className="flex justify-center items-center rounded w-full h-full bg-gray-100 text-5xl">
            {emoji}
          </div>
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
