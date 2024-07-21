import { Form } from "@remix-run/react";
import { ReactNode } from "react";

import { Button } from "~/components/ui/button";
import { Link } from "~/components/ui/link";
import { LinkButton } from "~/components/ui/link-button";
import { NavLink } from "~/components/ui/nav-link";

export interface DefaultLayoutProps {
  isLoggedIn: boolean;
  children: ReactNode;
}

export function DefaultLayout({
  isLoggedIn = false,
  children,
}: DefaultLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Link
            to="/"
            variant="none"
            className="mr-4 font-bold text-lg text-primary hover:text-primary/80 lg:mr-6"
          >
            Kazuvin
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <NavLink to="/works">Works</NavLink>
            <NavLink to="/posts">Posts</NavLink>
          </nav>
          <div className="flex flex-1 justify-end">
            {isLoggedIn ? (
              <Form action="/logout" method="post">
                <Button type="submit" size="sm">
                  Logout
                </Button>
              </Form>
            ) : (
              <LinkButton size="sm" to="/login">
                Log In
              </LinkButton>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
