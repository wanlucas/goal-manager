import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
 onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, onSubmit, ...props }: FormProps) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form {...props} onSubmit={handleSubmit}>{ children }</form>
  );
}
