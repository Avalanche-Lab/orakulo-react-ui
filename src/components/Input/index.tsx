import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

export function Input({
  label,
  error,
  prefixIcon,
  suffixIcon,
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
        {prefixIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            {prefixIcon}
          </div>
        )}
        <input
          {...props}
          className={`
            w-full px-4 py-3 border border-border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent 
            text-foreground placeholder-muted-foreground bg-input transition-colors
            ${prefixIcon ? "pl-10" : ""}
            ${suffixIcon ? "pr-10" : ""}
            ${error ? "border-destructive focus:ring-destructive" : ""}
            ${className}
          `.trim()}
        />
        {suffixIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground flex items-center justify-center">
            {suffixIcon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}
