import React, { useMemo, useState } from 'react';

interface TextFieldProps {
  label?: string;
  theme?: 'primary' | 'secondary' | 'tertiary';
  type?: 'text' | 'number' | 'password';
  name: string;
  onChange: (target: { name: string; value: string }) => void;
}

export default function TextField({
  onChange,
  label,
  type = 'text',
  theme = 'secondary',
  ...props
}: TextFieldProps) {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    onChange && onChange(event.target);
    setValue(event.target.value);
  };

  const handleFocus = (event) => {
    if (event.type === 'blur') {
      setIsActive(false);
    } else setIsActive(true);
  };

  const inputStyleState = useMemo(() => {
    const style = {
      border: {
        primary: 'border-b-primary',
        secondary: 'border-b-secondary',
        tertiary: 'border-b-tertiary',
      }[theme],
    };

    return style;
  }, [theme]);

  const labelStyleState = useMemo(() => {
    const style = {
      text: 'text-white',
      location: 'translate-x-1',
    };

    if (isActive || value) {
      style.location = '-translate-y-3/4 translate-x-0 font-light';
      style.text = {
        primary: 'text-gray',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary',
      }[theme];
    }

    return style;
  }, [isActive, theme]);

  return (
    <div className="relative h-7 my-5">
      <input
        {...props}
        type={type}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleFocus}
        className={[
          'h-full text-white rounded-t outline-none z-10 border-b bg-transparent',
          inputStyleState.border,
        ].join(' ')}
      />
      <label
        className={[
          'absolute left-0 transition',
          labelStyleState.location,
          labelStyleState.text,
        ].join(' ')}
      >
        {label}
      </label>
    </div>
  );
}
