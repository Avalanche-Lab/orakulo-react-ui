import {
  mdiAccount,
  mdiCheck,
  mdiClose,
  mdiDelete,
  mdiDownload,
  mdiHeart,
  mdiMagnify,
  mdiPlus,
  mdiSend,
  mdiStar,
  mdiThumbUp,
} from "@mdi/js";
import Icon from "@mdi/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const WithPrefixIcon: Story = {
  args: {
    variant: "default",
    children: "Adicionar Usuário",
    prefixIcon: <Icon path={mdiAccount} size={1} />,
  },
};

export const WithSuffixIcon: Story = {
  args: {
    variant: "default",
    children: "Próximo",
    suffixIcon: <Icon path={mdiSend} size={1} />,
  },
};

export const IconOnly: Story = {
  args: {
    variant: "outline",
    children: "",
    prefixIcon: <Icon path={mdiPlus} size={1} />,
  },
};

export const SearchButton: Story = {
  args: {
    variant: "secondary",
    children: "Buscar",
    prefixIcon: <Icon path={mdiMagnify} size={1} />,
  },
};

export const DownloadButton: Story = {
  args: {
    variant: "outline",
    children: "Download",
    prefixIcon: <Icon path={mdiDownload} size={1} />,
  },
};

export const DeleteButton: Story = {
  args: {
    variant: "default",
    children: "Excluir",
    prefixIcon: <Icon path={mdiDelete} size={1} />,
  },
};

export const LikeButton: Story = {
  args: {
    variant: "outline",
    children: "Curtir",
    prefixIcon: <Icon path={mdiHeart} size={1} />,
  },
};

export const StarButton: Story = {
  args: {
    variant: "secondary",
    children: "Favoritar",
    prefixIcon: <Icon path={mdiStar} size={1} />,
  },
};

export const ThumbUpButton: Story = {
  args: {
    variant: "default",
    children: "Aprovar",
    prefixIcon: <Icon path={mdiThumbUp} size={1} />,
  },
};

export const CloseButton: Story = {
  args: {
    variant: "outline",
    children: "Fechar",
    prefixIcon: <Icon path={mdiClose} size={1} />,
  },
};

export const CheckButton: Story = {
  args: {
    variant: "default",
    children: "Confirmar",
    prefixIcon: <Icon path={mdiCheck} size={1} />,
  },
};

export const SmallWithIcon: Story = {
  args: {
    variant: "default",
    size: "sm",
    children: "Adicionar",
    prefixIcon: <Icon path={mdiPlus} size={0.8} />,
  },
};

export const LargeWithIcon: Story = {
  args: {
    variant: "default",
    size: "lg",
    children: "Enviar Mensagem",
    prefixIcon: <Icon path={mdiSend} size={1.2} />,
  },
};
