import { forwardRef } from "react";

import { cn } from "~/lib/utils";

/* ------------------------------------------------------- */

interface TemplateHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const TemplateHeader = forwardRef<HTMLDivElement, TemplateHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <header ref={ref} className={cn("mb-12", className)} {...props}>
        {children}
      </header>
    );
  },
);

TemplateHeader.displayName = "TemplateHeader";

/* ------------------------------------------------------- */

interface TemplateTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const TemplateTitle = forwardRef<HTMLHeadingElement, TemplateTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1 ref={ref} className={cn("text-5xl font-bold", className)} {...props}>
        {children}
      </h1>
    );
  },
);

TemplateTitle.displayName = "TemplateTitle";

/* ------------------------------------------------------- */

export { TemplateTitle, TemplateHeader };
