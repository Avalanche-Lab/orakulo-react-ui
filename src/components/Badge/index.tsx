import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "informative"
    | "positive"
    | "negative"
    | "notice"
    | "neutral";
  size?: "sm" | "md" | "lg";
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  size = "md",
  prefixIcon,
  suffixIcon,
  children,
  className = "",
  ...props
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md border";

  const variantClasses = {
    default: "bg-primary text-primary-foreground border-primary",
    informative:
      "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-800",
    positive:
      "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-800",
    negative:
      "bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-800",
    notice:
      "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-800",
    neutral:
      "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs gap-1",
    md: "px-2.5 py-1 text-sm gap-1.5",
    lg: "px-3 py-1.5 text-base gap-2",
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {prefixIcon && <span className="flex-shrink-0">{prefixIcon}</span>}
      {children}
      {suffixIcon && <span className="flex-shrink-0">{suffixIcon}</span>}
    </span>
  );
}
