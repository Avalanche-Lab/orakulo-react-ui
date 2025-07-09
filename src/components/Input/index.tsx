import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Input({
  label,
  error,
  icon,
  rightIcon,
  className = "",
  ...props
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block text-sm font-semibold text-foreground mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}
        <input
          {...props}
          className={`
            w-full px-4 py-3 border border-border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent 
            text-foreground placeholder-muted-foreground bg-input transition-colors
            ${icon ? "pl-10" : ""}
            ${rightIcon ? "pr-10" : ""}
            ${error ? "border-destructive focus:ring-destructive" : ""}
            ${className}
          `.trim()}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground flex items-center justify-center">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}
