import { Link } from "@remix-run/react";
import { type VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { cn } from "~/lib/utils";

import { buttonVariants } from "./button";

const linkButtonVariants = buttonVariants;

export interface LinkButtonProps
  extends ComponentProps<typeof Link>,
    VariantProps<typeof linkButtonVariants> {}

export function LinkButton({
  className,
  variant,
  size,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(linkButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
