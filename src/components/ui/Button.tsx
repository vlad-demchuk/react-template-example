import React, { type ComponentPropsWithoutRef } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * Is button disabled
   */
  disabled?: boolean;
  /**
   * Additional CSS class names
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
}: ButtonProps) => {
  // This would typically include actual styling logic
  const baseStyles = 'px-4 py-2 rounded font-medium';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
