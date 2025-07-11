import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./index";
import Icon from "@mdi/react";
import { mdiCloudUpload } from "@mdi/js";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Componente wrapper para demonstrar modais interativos
function ModalDemo({
  variant = "info",
  title = "Modal Title",
  description = "This is a modal description.",
  actions = [],
  icon,
}: {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  description?: string;
  actions?: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "danger";
  }[];
  icon?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (action: { onClick: () => void }) => {
    action.onClick();
    setIsOpen(false);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-8">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Abrir Modal
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        description={description}
        variant={variant}
        icon={icon}
        actions={actions.map((action) => ({
          ...action,
          onClick: () => handleAction(action),
        }))}
      />
    </>
  );
}

export const Info: Story = {
  render: () => (
    <ModalDemo
      variant="info"
      title="Informação"
      description="Esta é uma notificação informativa."
    />
  ),
};

export const Success: Story = {
  render: () => (
    <ModalDemo
      variant="success"
      title="Sucesso!"
      description="Operação realizada com sucesso."
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <ModalDemo
      variant="warning"
      title="Atenção"
      description="Esta é uma notificação de aviso."
    />
  ),
};

export const Error: Story = {
  render: () => (
    <ModalDemo
      variant="error"
      title="Erro"
      description="Ocorreu um erro na operação."
    />
  ),
};

export const WithSingleAction: Story = {
  render: () => (
    <ModalDemo
      variant="success"
      title="Arquivo salvo"
      description="Seu arquivo foi salvo automaticamente."
      actions={[
        {
          label: "OK",
          onClick: () => console.log("OK clicado"),
        },
      ]}
    />
  ),
};

export const WithMultipleActions: Story = {
  render: () => (
    <ModalDemo
      variant="warning"
      title="Confirmar ação"
      description="Tem certeza que deseja continuar?"
      actions={[
        {
          label: "Cancelar",
          onClick: () => console.log("Cancelar clicado"),
          variant: "secondary",
        },
        {
          label: "Confirmar",
          onClick: () => console.log("Confirmar clicado"),
        },
      ]}
    />
  ),
};

export const WithDangerAction: Story = {
  render: () => (
    <ModalDemo
      variant="error"
      title="Confirmar exclusão"
      description="Tem certeza que deseja excluir este item? Esta ação não pode ser desfeita."
      actions={[
        {
          label: "Cancelar",
          onClick: () => console.log("Cancelar clicado"),
          variant: "secondary",
        },
        {
          label: "Excluir",
          onClick: () => console.log("Excluir clicado"),
          variant: "danger",
        },
      ]}
    />
  ),
};

export const WithCustomIcon: Story = {
  render: () => (
    <ModalDemo
      variant="success"
      title="Upload concluído"
      description="Todos os arquivos foram enviados com sucesso."
      icon={<Icon path={mdiCloudUpload} size={3} />}
      actions={[
        {
          label: "Ver arquivos",
          onClick: () => console.log("Ver arquivos clicado"),
        },
      ]}
    />
  ),
};

export const TitleOnly: Story = {
  render: () => <ModalDemo variant="info" title="Notificação simples" />,
};

export const DescriptionOnly: Story = {
  render: () => (
    <ModalDemo
      variant="info"
      description="Esta é uma notificação apenas com descrição."
    />
  ),
};

export const AllVariants: Story = {
  render: () => {
    const [openVariant, setOpenVariant] = useState<
      "info" | "success" | "warning" | "error" | null
    >(null);

    return (
      <>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center">
            Demonstração de Todos os Tipos
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setOpenVariant("success")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Sucesso
            </button>
            <button
              onClick={() => setOpenVariant("error")}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Erro
            </button>
            <button
              onClick={() => setOpenVariant("warning")}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
            >
              Aviso
            </button>
            <button
              onClick={() => setOpenVariant("info")}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Info
            </button>
          </div>
        </div>

        {openVariant && (
          <Modal
            isOpen={true}
            onClose={() => setOpenVariant(null)}
            title={`Modal ${openVariant}`}
            description={`Este é um modal do tipo ${openVariant}.`}
            variant={openVariant}
            actions={[
              {
                label: "Fechar",
                onClick: () => setOpenVariant(null),
              },
            ]}
          />
        )}
      </>
    );
  },
};
