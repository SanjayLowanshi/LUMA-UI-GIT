import React, { ButtonHTMLAttributes } from "react";
import "./button.scss";

/**
 * Luma Button
 * - Small, accessible button component using tokens from :root
 * - Supports: variant ('primary' | 'ghost' | 'danger'), size ('sm'|'md'|'lg'), disabled
 *
 * We keep props intentionally small for clarity. Expand as needed.
 */
type Variant = "primary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconOnly?: boolean; // if true, apply icon-only styling
}

/**
 * Usage:
 * <Button>Label</Button>
 * <Button variant="ghost" size="sm">Cancel</Button>
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  iconOnly = false,
  className = "",
  ...rest
}) => {
  // construct class names based on props
  const classes = [
    "luma-btn",
    `luma-btn--${variant}`,
    `luma-btn--${size}`,
    iconOnly ? "luma-btn--icon" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    // spread rest so native props like onClick, disabled, aria-* work natively
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
