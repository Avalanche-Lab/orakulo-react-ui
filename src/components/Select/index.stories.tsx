import {
  mdiAccount,
  mdiEarth,
  mdiFlag,
  mdiMapMarker,
  mdiSchool,
} from "@mdi/js";
import Icon from "@mdi/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Categoria",
    placeholder: "Selecione uma categoria",
    options: [
      { value: "tech", label: "Tecnologia" },
      { value: "design", label: "Design" },
      { value: "marketing", label: "Marketing" },
      { value: "finance", label: "Finanças" },
    ],
  },
};

export const WithPrefixIcon: Story = {
  args: {
    label: "País",
    placeholder: "Selecione seu país",
    prefixIcon: <Icon path={mdiEarth} size={1} />,
    options: [
      { value: "br", label: "Brasil" },
      { value: "us", label: "Estados Unidos" },
      { value: "ca", label: "Canadá" },
      { value: "uk", label: "Reino Unido" },
      { value: "au", label: "Austrália" },
    ],
  },
};

export const WithError: Story = {
  args: {
    label: "Estado",
    placeholder: "Selecione seu estado",
    prefixIcon: <Icon path={mdiMapMarker} size={1} />,
    error: "Este campo é obrigatório",
    options: [
      { value: "sp", label: "São Paulo" },
      { value: "rj", label: "Rio de Janeiro" },
      { value: "mg", label: "Minas Gerais" },
      { value: "rs", label: "Rio Grande do Sul" },
    ],
  },
};

export const UserType: Story = {
  args: {
    label: "Tipo de Usuário",
    placeholder: "Selecione o tipo de usuário",
    prefixIcon: <Icon path={mdiAccount} size={1} />,
    options: [
      { value: "admin", label: "Administrador" },
      { value: "user", label: "Usuário" },
      { value: "moderator", label: "Moderador" },
      { value: "guest", label: "Convidado" },
    ],
  },
};

export const Education: Story = {
  args: {
    label: "Nível de Educação",
    placeholder: "Selecione seu nível de educação",
    prefixIcon: <Icon path={mdiSchool} size={1} />,
    options: [
      { value: "elementary", label: "Ensino Fundamental" },
      { value: "highschool", label: "Ensino Médio" },
      { value: "college", label: "Ensino Superior" },
      { value: "graduate", label: "Pós-graduação" },
      { value: "phd", label: "Doutorado" },
    ],
  },
};

export const Language: Story = {
  args: {
    label: "Idioma",
    placeholder: "Selecione o idioma",
    prefixIcon: <Icon path={mdiFlag} size={1} />,
    options: [
      { value: "pt", label: "Português" },
      { value: "en", label: "Inglês" },
      { value: "es", label: "Espanhol" },
      { value: "fr", label: "Francês" },
      { value: "de", label: "Alemão" },
      { value: "it", label: "Italiano" },
    ],
  },
};

export const WithoutPlaceholder: Story = {
  args: {
    label: "Prioridade",
    options: [
      { value: "low", label: "Baixa" },
      { value: "medium", label: "Média" },
      { value: "high", label: "Alta" },
      { value: "urgent", label: "Urgente" },
    ],
  },
};
