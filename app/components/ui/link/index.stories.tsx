import { createRemixStub } from "@remix-run/testing";
import type { Meta, StoryObj } from "@storybook/react";

import { Link, LinkProps, linkSize, linkVariant } from ".";

const meta = {
  title: "Link",
  component: Link,
  args: {
    children: "Link",
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: Object.keys(linkVariant),
    },
    size: {
      control: {
        type: "select",
      },
      options: Object.keys(linkSize),
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
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Link",
  } as LinkProps,
};
