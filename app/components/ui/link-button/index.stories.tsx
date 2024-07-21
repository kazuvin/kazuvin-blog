import { createRemixStub } from "@remix-run/testing";
import type { Meta, StoryObj } from "@storybook/react";

import { buttonSize, buttonVariant } from "../button";

import { LinkButton, LinkButtonProps } from ".";

const meta = {
  title: "LinkButton",
  component: LinkButton,
  args: {
    children: "LinkButton",
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
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {} as LinkButtonProps,
};
