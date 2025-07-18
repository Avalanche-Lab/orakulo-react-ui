import React from "react";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  prefixIcon?: React.ReactNode;
  placeholder?: string;
}

export function Select({
  label,
  options,
  error,
  prefixIcon,
  placeholder,
  className = "",
  ...props
}: SelectProps) {
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
        <select
          {...props}
          className={`
            w-full px-4 py-3 border border-border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent 
            text-foreground transition-colors appearance-none bg-input
            ${prefixIcon ? "pl-10" : ""}
            ${error ? "border-destructive focus:ring-destructive" : ""}
            ${className}
          `.trim()}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <Icon path={mdiChevronDown} size={1} className="text-muted-foreground" />
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}
