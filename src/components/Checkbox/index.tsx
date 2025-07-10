import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  indeterminate?: boolean;
}

export function Checkbox({
  label,
  error,
  helperText,
  indeterminate = false,
  className = "",
  ...props
}: CheckboxProps) {
  const checkboxRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className="space-y-1">
      <div className="flex items-start space-x-2 flex-1">
        <input
          ref={checkboxRef}
          type="checkbox"
          {...props}
          className={`
            w-4 h-4 text-primary border-border rounded mt-1
            focus:ring-ring focus:ring-2 bg-input flex-shrink-0
            ${error ? "border-destructive" : ""}
            ${className}
          `.trim()}
        />
        <div className="flex-1 min-w-0">
          <label
            htmlFor={props.id}
            className="text-sm font-medium text-foreground cursor-pointer select-none leading-tight"
          >
            {label}
          </label>
          {helperText && !error && (
            <p className="mt-1 text-xs text-muted-foreground">{helperText}</p>
          )}
        </div>
      </div>

      {error && <p className="text-sm text-destructive ml-6">{error}</p>}
    </div>
  );
}
