import { Link as RemixLink } from "@remix-run/react";
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { cn } from "~/lib/utils";

import { buttonVariants } from "./button";

const linkVariants = buttonVariants;

export interface LinkProps
  extends ComponentProps<typeof RemixLink>,
    VariantProps<typeof linkVariants> {}

export function Link({ className, variant, size, ...props }: LinkProps) {
  return (
    <RemixLink
      className={cn(linkVariants({ variant, size, className }))}
      {...props}
    />
  );
}
