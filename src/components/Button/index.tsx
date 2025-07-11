import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary";
  size?: "sm" | "md" | "lg";
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "default",
  size = "md",
  prefixIcon,
  suffixIcon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2";

  const variantClasses = {
    default:
      "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
    secondary:
      "border-2 border-blue-500 bg-background text-blue-500 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600 focus:ring-blue-500 dark:hover:bg-blue-950",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {prefixIcon && <span className="flex-shrink-0">{prefixIcon}</span>}
      {children}
      {suffixIcon && <span className="flex-shrink-0">{suffixIcon}</span>}
    </button>
  );
}
