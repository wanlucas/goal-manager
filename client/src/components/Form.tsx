import React from 'react';
import styled from 'styled-components';

interface FormProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  sx?: React.CSSProperties;
}

const StyledForm = styled.form`
  width: 100%;
`;

export default function Form({ children, onSubmit, sx }: FormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <StyledForm style={{ ...sx }} onSubmit={handleSubmit}>{ children }</StyledForm>
  );
}
