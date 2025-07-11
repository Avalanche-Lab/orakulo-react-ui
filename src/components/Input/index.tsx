import React, { useState } from "react";

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
  const [isFocused, setIsFocused] = useState(false);

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
          <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors ${
            isFocused ? "text-ring" : "text-muted-foreground"
          }`}>
            {prefixIcon}
          </div>
        )}
        <input
          {...props}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
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
          <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center transition-colors ${
            isFocused ? "text-ring" : "text-muted-foreground"
          }`}>
            {suffixIcon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}
