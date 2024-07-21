import { Link as RemixLink } from "@remix-run/react";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { cn } from "~/lib/utils";

const variant = {
  default: "text-primary underline-offset-4 hover:underline",
  none: undefined,
};

const size = {
  default: "font-mediam",
  none: undefined,
};

const linkVariants = cva(undefined, {
  variants: {
    variant,
    size,
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface LinkProps
  extends ComponentProps<typeof RemixLink>,
    VariantProps<typeof linkVariants> {}

function Link({ className, variant, size, ...props }: LinkProps) {
  return (
    <RemixLink
      className={cn(linkVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Link, linkVariants, variant as linkVariant, size as linkSize };
