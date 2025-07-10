import {
  mdiAccount,
  mdiEmail,
  mdiEye,
  mdiLock,
  mdiMagnify,
  mdiMapMarker,
  mdiPhone,
} from "@mdi/js";
import Icon from "@mdi/react";
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
    label: "Nome",
    type: "text",
    placeholder: "Digite seu nome",
    icon: <Icon path={mdiAccount} size={1} />,
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "Digite seu email",
    icon: <Icon path={mdiEmail} size={1} />,
  },
};

export const Password: Story = {
  args: {
    label: "Senha",
    type: "password",
    placeholder: "Digite sua senha",
    icon: <Icon path={mdiLock} size={1} />,
  },
};

export const Phone: Story = {
  args: {
    label: "Telefone",
    type: "tel",
    placeholder: "Digite seu telefone",
    icon: <Icon path={mdiPhone} size={1} />,
  },
};

export const Location: Story = {
  args: {
    label: "Endereço",
    type: "text",
    placeholder: "Digite seu endereço",
    icon: <Icon path={mdiMapMarker} size={1} />,
  },
};

export const Search: Story = {
  args: {
    label: "Buscar",
    type: "search",
    placeholder: "Digite para buscar...",
    icon: <Icon path={mdiMagnify} size={1} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Senha",
    type: "password",
    placeholder: "Digite sua senha",
    icon: <Icon path={mdiLock} size={1} />,
    rightIcon: <Icon path={mdiEye} size={1} />,
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "Digite seu email",
    icon: <Icon path={mdiEmail} size={1} />,
    error: "Email inválido",
  },
};

export const Number: Story = {
  args: {
    label: "Idade",
    type: "number",
    placeholder: "Digite sua idade",
  },
};

export const Date: Story = {
  args: {
    label: "Data de Nascimento",
    type: "date",
  },
};
