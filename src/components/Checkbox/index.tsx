import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Checkbox({
  label,
  error,
  className = "",
  ...props
}: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        {...props}
        className={`
          w-4 h-4 text-primary border-border rounded 
          focus:ring-ring focus:ring-2 bg-input
          ${error ? "border-destructive" : ""}
          ${className}
        `.trim()}
      />
      <label
        htmlFor={props.id}
        className="text-sm font-medium text-foreground cursor-pointer select-none"
      >
        {label}
      </label>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
