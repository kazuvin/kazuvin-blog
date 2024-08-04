import { cn } from "~/lib/utils";

export interface SkeltonProps {
  className: string;
}

export default function Skelton({ className }: SkeltonProps) {
  return (
    <div
      role="status"
      className={cn(["rounded animate-pulse bg-gray-500", className])}
    />
  );
}
