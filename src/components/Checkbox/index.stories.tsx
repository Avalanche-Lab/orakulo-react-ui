import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Aceito os termos e condições",
  },
};

export const WithError: Story = {
  args: {
    label: "Aceito os termos e condições",
    error: "Você deve aceitar os termos para continuar",
  },
};

export const Checked: Story = {
  args: {
    label: "Aceito os termos e condições",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Aceito os termos e condições",
    disabled: true,
  },
};
