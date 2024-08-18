import { Link, NavLink } from "@remix-run/react";
import { ReactNode } from "react";

import { Button } from "~/components/ui/button";
import { ModeToggle } from "~/components/ui/mode-toggle";

import Container from "../container";

export interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-border/40">
        <Container className="flex h-14 mx-auto items-center">
          <Link
            to="/"
            className="mr-4 font-bold text-lg text-primary hover:text-primary/80 lg:mr-6"
          >
            Kazuvin
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <Button
              variant="navlink"
              size="none"
              className="[&.active]:text-foreground [&.active]:hover:text-foreground/80"
              asChild
            >
              <NavLink to="/works">Works</NavLink>
            </Button>
            <Button
              variant="navlink"
              size="none"
              className="[&.active]:text-foreground [&.active]:hover:text-foreground/80"
              asChild
            >
              <NavLink to="/posts">Posts</NavLink>
            </Button>
            <Button
              variant="navlink"
              size="none"
              className="[&.active]:text-foreground [&.active]:hover:text-foreground/80"
              asChild
            >
              <NavLink to="/scraps">Scraps</NavLink>
            </Button>
          </nav>
          <div className="flex flex-1 justify-end items-center">
            <ModeToggle />
          </div>
        </Container>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
