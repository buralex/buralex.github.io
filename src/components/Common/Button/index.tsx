import React from 'react';

type Props = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ref: React.Ref<HTMLButtonElement>;
};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ type = 'button', className, children, onClick, ...rest }, ref) => {
    return (
      <button
        onClick={onClick}
        type={type}
        className={`rounded-1 btn ${className}`}
        {...rest}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;
