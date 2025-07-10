import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: "Text",
    type: "text",
    placeholder: "Insert text here",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Password",
  },
};

export const Number: Story = {
  args: {
    label: "Number",
    type: "number",
    placeholder: "Number",
  },
};

export const Date: Story = {
  args: {
    label: "Date",
    type: "date",
    placeholder: "Date",
  },
};
