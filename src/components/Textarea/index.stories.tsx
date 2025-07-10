import {
  mdiAccountEdit,
  mdiBookOpen,
  mdiFileDocument,
  mdiMessage,
  mdiNoteText,
} from "@mdi/js";
import Icon from "@mdi/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from ".";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rows: {
      control: { type: "number", min: 1, max: 10 },
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    maxLength: {
      control: { type: "number", min: 1, max: 1000 },
    },
    showCharacterCount: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Descrição",
    placeholder: "Digite sua descrição aqui...",
    id: "description",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Biografia",
    placeholder: "Conte um pouco sobre você...",
    helperText: "Máximo de 500 caracteres",
    id: "bio",
  },
};

export const WithError: Story = {
  args: {
    label: "Comentário",
    placeholder: "Digite seu comentário...",
    error: "Este campo é obrigatório",
    id: "comment",
  },
};

export const WithPrefixIcon: Story = {
  args: {
    label: "Mensagem",
    placeholder: "Digite sua mensagem...",
    prefixIcon: <Icon path={mdiMessage} size={1} />,
    id: "message",
  },
};

export const WithSuffixIcon: Story = {
  args: {
    label: "Perfil",
    placeholder: "Descreva seu perfil...",
    suffixIcon: <Icon path={mdiAccountEdit} size={1} />,
    id: "profile",
  },
};

export const WithCharacterLimit: Story = {
  args: {
    label: "Tweet",
    placeholder: "O que está acontecendo?",
    maxLength: 280,
    showCharacterCount: true,
    helperText: "Máximo de 280 caracteres",
    prefixIcon: <Icon path={mdiMessage} size={1} />,
    id: "tweet",
  },
};

export const WithCharacterLimitAndError: Story = {
  args: {
    label: "Resumo",
    placeholder: "Digite um resumo...",
    maxLength: 100,
    showCharacterCount: true,
    value:
      "Este é um texto muito longo que excede o limite de caracteres permitidos para este campo. O componente deve mostrar um erro quando o limite for excedido.",
    prefixIcon: <Icon path={mdiFileDocument} size={1} />,
    id: "summary",
  },
};

export const WithCharacterCountOnly: Story = {
  args: {
    label: "Notas",
    placeholder: "Suas notas aqui...",
    showCharacterCount: true,
    helperText: "Contador de caracteres sem limite",
    prefixIcon: <Icon path={mdiNoteText} size={1} />,
    id: "notes",
  },
};

export const Disabled: Story = {
  args: {
    label: "Descrição",
    placeholder: "Este campo está desabilitado",
    disabled: true,
    value: "Texto pré-preenchido que não pode ser editado",
    id: "disabled-textarea",
  },
};

export const Large: Story = {
  args: {
    label: "História",
    placeholder: "Escreva uma história longa...",
    rows: 8,
    prefixIcon: <Icon path={mdiBookOpen} size={1} />,
    id: "story",
  },
};

export const Small: Story = {
  args: {
    label: "Nota Rápida",
    placeholder: "Uma nota curta...",
    rows: 2,
    prefixIcon: <Icon path={mdiNoteText} size={1} />,
    id: "note",
  },
};
