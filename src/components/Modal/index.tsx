import {
  mdiAlertCircle,
  mdiCheckCircle,
  mdiCloseCircle,
  mdiInformation,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useRef } from "react";

export type ModalVariant = "info" | "success" | "warning" | "error";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  variant?: ModalVariant;
  icon?: React.ReactNode;
  actions?: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "danger";
  }[];
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  variant = "info",
  icon,
  actions = [],
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = "",
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && closeOnEscape) {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        closeOnOverlayClick
      ) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, closeOnEscape, closeOnOverlayClick]);

  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return {
          header: "bg-green-600",
          icon: "text-white",
          title: "text-foreground",
          description: "text-muted-foreground",
        };
      case "warning":
        return {
          header: "bg-yellow-600",
          icon: "text-white",
          title: "text-foreground",
          description: "text-muted-foreground",
        };
      case "error":
        return {
          header: "bg-red-600",
          icon: "text-white",
          title: "text-foreground",
          description: "text-muted-foreground",
        };
      default:
        return {
          header: "bg-blue-600",
          icon: "text-white",
          title: "text-foreground",
          description: "text-muted-foreground",
        };
    }
  };

  const getDefaultIcon = () => {
    switch (variant) {
      case "success":
        return <Icon path={mdiCheckCircle} size={3} />;
      case "warning":
        return <Icon path={mdiAlertCircle} size={3} />;
      case "error":
        return <Icon path={mdiCloseCircle} size={3} />;
      default:
        return <Icon path={mdiInformation} size={3} />;
    }
  };

  const getActionStyles = (actionVariant?: string) => {
    switch (actionVariant) {
      case "danger":
        return "bg-red-500 text-white hover:bg-red-600";
      case "secondary":
        return "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600";
      default:
        return "bg-primary text-primary-foreground hover:bg-primary/90";
    }
  };

  const styles = getVariantStyles();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`
          relative w-full max-w-lg bg-background rounded-lg shadow-xl
          overflow-hidden
          animate-in fade-in-0 zoom-in-95 duration-200
          ${className}
        `}
        role="dialog"
        aria-modal="true"
      >
        {/* Header com ícone */}
        <div
          className={`${styles.header} h-32 flex items-center justify-center`}
        >
          <div className={styles.icon}>{icon || getDefaultIcon()}</div>
        </div>

        {/* Content */}
        <div className="p-6">
          {title && (
            <h2 className={`text-lg font-semibold mb-2 ${styles.title}`}>
              {title}
            </h2>
          )}
          {description && (
            <p className={`text-sm ${styles.description}`}>{description}</p>
          )}

          {/* Actions */}
          {actions.length > 0 && (
            <div
              className={`mt-6 flex ${
                actions.length === 1
                  ? "justify-center"
                  : "justify-end space-x-2"
              }`}
            >
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onClick}
                  className={`px-4 py-2 rounded-md transition-colors min-w-[80px] ${getActionStyles(
                    action.variant
                  )}`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
