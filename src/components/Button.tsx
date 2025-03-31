import React, { forwardRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Define button variants using class-variance-authority
const buttonVariants = cva(
  // Base styles applied to all variants
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-background focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      size: {
        xs: 'h-7 px-2 py-1 text-xs',
        sm: 'h-9 px-3 py-1.5',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-5 py-2.5',
        xl: 'h-12 px-6 py-3',
        icon: 'h-9 w-9 p-0',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

// Button props interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Optional left icon
   */
  leftIcon?: ReactNode;
  /**
   * Optional right icon
   */
  rightIcon?: ReactNode;
  /**
   * Loading state
   */
  isLoading?: boolean;
  /**
   * Loading text that appears when isLoading is true
   */
  loadingText?: string;
}

/**
 * Button component
 *
 * Usage examples:
 * ```tsx
 * <Button>Default Button</Button>
 * <Button variant="secondary" size="lg">Secondary Large</Button>
 * <Button variant="outline" leftIcon={<IconName />}>With Icon</Button>
 * <Button isLoading loadingText="Saving...">Save</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      children,
      leftIcon,
      rightIcon,
      isLoading,
      loadingText,
      disabled,
      ...props
    },
    ref
  ) => {
    // Combine Tailwind classes
    const getClassNames = () => {
      const classes = [buttonVariants({ variant, size, fullWidth, className })];
      return classes.join(' ');
    };

    return (
      <button
        className={getClassNames()}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span
            className='mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent'
            aria-hidden='true'
          />
        )}

        {!isLoading && leftIcon && <span className='mr-2'>{leftIcon}</span>}
        {isLoading && loadingText ? loadingText : children}
        {!isLoading && rightIcon && <span className='ml-2'>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
