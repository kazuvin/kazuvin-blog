import { NavLink as RemixNavLink } from "@remix-run/react";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { cn } from "~/lib/utils";

const variant = {
  default:
    "text-foreground/60 hover:text-foreground/80 [&.active]:text-foreground [&.active]:hover:text-foreground/80",
  none: undefined,
};

const size = {
  default: "font-mediam",
  none: undefined,
};

const navLinkVariants = cva(undefined, {
  variants: {
    variant,
    size,
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface NavLinkProps
  extends ComponentProps<typeof RemixNavLink>,
    VariantProps<typeof navLinkVariants> {}

export function NavLink({ className, variant, size, ...props }: NavLinkProps) {
  return (
    <RemixNavLink
      className={cn(navLinkVariants({ variant, size, className }))}
      {...props}
    />
  );
}
