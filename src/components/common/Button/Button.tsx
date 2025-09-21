import React, { forwardRef } from 'react';
import classNames from 'classnames';
import type { ButtonColorType } from './Button.type';
import { buttonColors } from './Button.style';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColorType;
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, color = 'default', icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          'border rounded py-1.5 px-2 transition-colors text-nowrap',
          { 'flex items-center justify-center gap-1': icon },
          buttonColors[color],
          className,
        )}
        {...props}
      >
        {icon}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
