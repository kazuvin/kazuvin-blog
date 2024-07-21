import { createRemixStub } from "@remix-run/testing";
import type { Meta, StoryObj } from "@storybook/react";

import { buttonSize, buttonVariant } from "../button";

import { NavLink, NavLinkProps } from ".";

const meta = {
  title: "NavLink",
  component: NavLink,
  args: {
    children: "NavLink",
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: Object.keys(buttonVariant),
    },
    size: {
      control: {
        type: "select",
      },
      options: Object.keys(buttonSize),
    },
  },
  decorators: [
    (story) => {
      const remixStub = createRemixStub([
        {
          path: "/*",
          action: () => ({ redirect: "/" }),
          loader: () => ({ redirect: "/" }),
          Component: () => story(),
        },
      ]);

      return remixStub({ initialEntries: ["/"] });
    },
  ],
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {} as NavLinkProps,
};
