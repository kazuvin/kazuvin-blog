import { ReactNode } from "react";

import { cn } from "~/lib/utils";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn("container", className)}>{children}</div>;
}
