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

export const WithHelperText: Story = {
  args: {
    label: "Receber notificações por email",
    helperText: "Você receberá atualizações sobre novos recursos e melhorias",
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

export const Indeterminate: Story = {
  args: {
    label: "Selecionar todos os itens",
    indeterminate: true,
  },
};

export const LongLabel: Story = {
  args: {
    label:
      "Aceito receber comunicações de marketing, incluindo emails promocionais, newsletters e ofertas especiais sobre produtos e serviços que possam ser do meu interesse",
    helperText:
      "Você pode cancelar a qualquer momento através do link no final dos emails",
  },
};

export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox
        label="Notificações por email"
        helperText="Receba atualizações importantes por email"
      />
      <Checkbox
        label="Notificações push"
        helperText="Receba notificações no navegador"
      />
      <Checkbox label="Notificações SMS" helperText="Receba alertas por SMS" />
    </div>
  ),
};
