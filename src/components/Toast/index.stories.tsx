import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProvider, useToast } from ".";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastProvider position="top-center">
        <div className="flex items-center justify-center p-4">
          <Story />
        </div>
      </ToastProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

function ToastDemo({
  variant,
  title,
  description,
  duration,
  action,
  icon,
}: {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  description?: string;
  duration?: number;
  action?: { label: string; onClick: () => void };
  icon?: React.ReactNode;
}) {
  const { addToast } = useToast();

  const showToast = () => {
    addToast({
      title: title || "Notificação",
      description: description,
      variant: variant || "info",
      duration: duration,
      action: action,
      icon: icon,
    });
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <button
          onClick={showToast}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Mostrar Toast
        </button>
      </div>
    </div>
  );
}

export const Info: Story = {
  render: () => (
    <ToastDemo
      variant="info"
      title="Informação"
      description="Esta é uma notificação informativa."
    />
  ),
};

export const Success: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      title="Sucesso!"
      description="Operação realizada com sucesso."
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <ToastDemo
      variant="warning"
      title="Atenção"
      description="Esta é uma notificação de aviso."
    />
  ),
};

export const Error: Story = {
  render: () => (
    <ToastDemo
      variant="error"
      title="Erro"
      description="Ocorreu um erro na operação."
    />
  ),
};

export const WithAction: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      title="Arquivo salvo"
      description="Seu arquivo foi salvo automaticamente."
      action={{
        label: "Desfazer",
        onClick: () => console.log("Desfazer clicado"),
      }}
    />
  ),
};

export const WithCustomIcon: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      title="Upload concluído"
      description="Todos os arquivos foram enviados."
      icon={
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      }
    />
  ),
};

export const Persistent: Story = {
  render: () => (
    <ToastDemo
      variant="info"
      title="Notificação persistente"
      description="Esta notificação não desaparece automaticamente."
      duration={0}
    />
  ),
};

export const ShortDuration: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      title="Notificação rápida"
      description="Esta notificação desaparece em 2 segundos."
      duration={2000}
    />
  ),
};

export const TitleOnly: Story = {
  render: () => <ToastDemo variant="info" title="Notificação simples" />,
};

function AllToastsDemo() {
  const { addToast } = useToast();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-center">
        Demonstração de Todos os Tipos
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() =>
            addToast({
              title: "Sucesso!",
              description: "Operação realizada com sucesso.",
              variant: "success",
            })
          }
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Sucesso
        </button>
        <button
          onClick={() =>
            addToast({
              title: "Erro",
              description: "Ocorreu um erro na operação.",
              variant: "error",
            })
          }
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Erro
        </button>
        <button
          onClick={() =>
            addToast({
              title: "Atenção",
              description: "Esta é uma notificação de aviso.",
              variant: "warning",
            })
          }
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
        >
          Aviso
        </button>
        <button
          onClick={() =>
            addToast({
              title: "Informação",
              description: "Esta é uma notificação informativa.",
              variant: "info",
            })
          }
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Info
        </button>
      </div>
    </div>
  );
}

export const InteractiveDemo: Story = {
  render: () => <AllToastsDemo />,
  parameters: {
    layout: "centered",
  },
};
