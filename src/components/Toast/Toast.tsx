import React, { useEffect, useState } from "react";

export type ToastVariant = "info" | "success" | "warning" | "error";

export interface ToastProps {
  id?: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
  dismissible?: boolean;
  progress?: number; // 0-100
}

export function Toast({
  id,
  title,
  description,
  variant = "info",
  duration = 5000,
  onClose,
  action,
  icon,
  dismissible = true,
  progress,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (duration > 0 && progress === undefined) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, progress]);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        handleClose();
      }, 1000); // Aguarda 1 segundo após completar para o usuário ver

      return () => clearTimeout(timer);
    }
  }, [progress]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 200);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return {
          container:
            "bg-green-600 border-green-700 dark:bg-green-600 dark:border-green-700",
          icon: "text-white",
          title: "text-white",
          description: "text-white/90",
        };
      case "warning":
        return {
          container:
            "bg-yellow-600 border-yellow-700 dark:bg-yellow-600 dark:border-yellow-700",
          icon: "text-white",
          title: "text-white",
          description: "text-white/90",
        };
      case "error":
        return {
          container:
            "bg-red-600 border-red-700 dark:bg-red-600 dark:border-red-700",
          icon: "text-white",
          title: "text-white",
          description: "text-white/90",
        };
      default:
        return {
          container:
            "bg-blue-600 border-blue-700 dark:bg-blue-600 dark:border-blue-700",
          icon: "text-white",
          title: "text-white",
          description: "text-white/90",
        };
    }
  };

  const getDefaultIcon = () => {
    switch (variant) {
      case "success":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        );
      case "warning":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        );
      case "error":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
    }
  };

  const styles = getVariantStyles();

  if (!isVisible) return null;

  return (
    <div
      id={id}
      className={`
        relative flex items-center gap-3 p-4 rounded-lg border shadow-lg
        transition-all duration-200 ease-in-out
        min-w-[500px] max-w-[800px] w-full
        ${styles.container}
        ${
          isExiting ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"
        }
      `}
      role="alert"
      aria-live="polite"
    >
      {/* Ícone */}
      <div className={`flex-shrink-0 ${styles.icon}`}>
        <div className="w-8 h-8 flex items-center justify-center">
          {icon || getDefaultIcon()}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className={`text-sm font-semibold ${styles.title}`}>{title}</h4>
        )}
        {description && (
          <p className={`text-sm mt-1 ${styles.description}`}>{description}</p>
        )}
        {action && (
          <button
            onClick={action.onClick}
            className={`text-sm font-medium mt-2 hover:underline ${styles.title}`}
          >
            {action.label}
          </button>
        )}
        {progress !== undefined && (
          <div className="mt-3">
            <div className="w-full bg-white/20 rounded-full h-1.5">
              <div
                className="bg-white h-1.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Botão de fechar */}
      {dismissible && (
        <button
          onClick={handleClose}
          className={`
            flex-shrink-0 p-2 rounded-md hover:bg-white/20
            transition-colors duration-150
            ${styles.icon}
          `}
          aria-label="Fechar notificação"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
