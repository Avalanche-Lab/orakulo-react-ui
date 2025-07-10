import React, { useEffect, useState } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  maxLength?: number;
  showCharacterCount?: boolean;
}

export function Textarea({
  label,
  error,
  helperText,
  prefixIcon,
  suffixIcon,
  className = "",
  rows = 4,
  maxLength,
  showCharacterCount = false,
  value,
  defaultValue,
  onChange,
  ...props
}: TextareaProps) {
  const [charCount, setCharCount] = useState(0);
  const [isOverLimit, setIsOverLimit] = useState(false);

  useEffect(() => {
    const currentValue = value || defaultValue || "";
    const count = String(currentValue).length;
    setCharCount(count);
    setIsOverLimit(maxLength ? count > maxLength : false);
  }, [value, defaultValue, maxLength]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    const newCount = newValue.length;

    setCharCount(newCount);
    setIsOverLimit(maxLength ? newCount > maxLength : false);

    if (onChange) {
      onChange(e);
    }
  };

  const shouldShowLimitError = maxLength && isOverLimit;
  const displayError =
    error ||
    (shouldShowLimitError
      ? `Máximo de ${maxLength} caracteres permitidos`
      : "");

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
          <div className="absolute left-3 top-3 text-muted-foreground">
            {prefixIcon}
          </div>
        )}
        <textarea
          {...props}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          rows={rows}
          maxLength={maxLength}
          className={`
            w-full px-4 py-3 border border-border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent 
            text-foreground placeholder-muted-foreground bg-input transition-colors resize-vertical
            ${prefixIcon ? "pl-10" : ""}
            ${suffixIcon ? "pr-10" : ""}
            ${displayError ? "border-destructive focus:ring-destructive" : ""}
            ${className}
          `.trim()}
        />
        {suffixIcon && (
          <div className="absolute right-3 top-3 text-muted-foreground flex items-center justify-center">
            {suffixIcon}
          </div>
        )}
      </div>

      {/* Contador de caracteres e mensagens */}
      <div className="mt-1 flex justify-between items-center">
        {(displayError || helperText) && (
          <p
            className={`text-sm ${
              displayError ? "text-destructive" : "text-muted-foreground"
            }`}
          >
            {displayError || helperText}
          </p>
        )}

        {(showCharacterCount || maxLength) && (
          <p
            className={`text-xs ${
              isOverLimit ? "text-destructive" : "text-muted-foreground"
            }`}
          >
            {charCount}
            {maxLength && `/${maxLength}`}
          </p>
        )}
      </div>
    </div>
  );
}
