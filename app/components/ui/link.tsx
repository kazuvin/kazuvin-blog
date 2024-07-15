import { Link as RemixLink } from "@remix-run/react";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { cn } from "~/lib/utils";

const linkVariants = cva(undefined, {
  variants: {
    variant: {
      default: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "font-mediam",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

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
