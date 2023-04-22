import React, { useMemo } from 'react';

interface buttonProps {
  children: React.ReactNode;
  theme?: 'primary' | 'secondary' | 'tertiary' | 'error';
  variant?: 'contained' | 'outlined';
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export default function Button({
  children,
  onClick,
  variant = 'contained',
  theme = 'secondary',
  disabled = false,
  type = 'button',
}: buttonProps) {
  const buttonStyle = useMemo(() => {
    const style = {
      backgroundColor: variant === 'outlined' ? 'bg-transparent' : {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
        error: 'bg-error',
      }[theme],
      border: {
        primary: 'border-primary',
        secondary: 'border-secondary',
        tertiary: 'border-tertiary',
        error: 'border-error',
      }[theme],
    };

    return style;
  }, []);

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={[
        'px-3 py-1 border rounded-md text-white hover:brightness-90 active:scale-95',
        buttonStyle.backgroundColor,
        buttonStyle.border,
      ].join(' ')}
    >
      {children}
    </button>
  );
}
