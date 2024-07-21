import type { Meta, StoryObj } from "@storybook/react";

import { Button, buttonSize, buttonVariant } from ".";

const meta = {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
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
    asChild: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};
