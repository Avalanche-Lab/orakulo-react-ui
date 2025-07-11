import React, { createContext, useCallback, useContext, useState } from "react";
import type { ToastProps } from "./Toast";
import { Toast } from "./Toast";

interface ToastContextType {
  addToast: (toast: Omit<ToastProps, "id">) => string;
  removeToast: (id: string) => void;
  clearToasts: () => void;
  updateToast: (id: string, updates: Partial<ToastProps>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastItem extends ToastProps {
  id: string;
}

interface ToastProviderProps {
  children: React.ReactNode;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
  maxToasts?: number;
}

export function ToastProvider({
  children,
  position = "top-right",
  maxToasts = 5,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback(
    (toast: Omit<ToastProps, "id">) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast: ToastItem = { ...toast, id };

      setToasts((prev) => {
        const updated = [newToast, ...prev];
        if (updated.length > maxToasts) {
          return updated.slice(0, maxToasts);
        }
        return updated;
      });

      return id;
    },
    [maxToasts]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const updateToast = useCallback(
    (id: string, updates: Partial<ToastProps>) => {
      setToasts((prev) =>
        prev.map((toast) =>
          toast.id === id ? { ...toast, ...updates } : toast
        )
      );
    },
    []
  );

  const getPositionStyles = () => {
    switch (position) {
      case "top-left":
        return "top-4 left-4";
      case "top-center":
        return "top-4 left-1/2 transform -translate-x-1/2";
      case "top-right":
        return "top-4 right-4";
      case "bottom-left":
        return "bottom-4 left-4";
      case "bottom-center":
        return "bottom-4 left-1/2 transform -translate-x-1/2";
      case "bottom-right":
        return "bottom-4 right-4";
      default:
        return "top-4 right-4";
    }
  };

  return (
    <ToastContext.Provider
      value={{ addToast, removeToast, clearToasts, updateToast }}
    >
      {children}
      <div className={`fixed z-50 space-y-2 p-4 ${getPositionStyles()}`}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
