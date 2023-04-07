import React from 'react';
import styled from 'styled-components';
import { inputHeights } from '../constants/sizes';
import colors from '../constants/colors';

interface TextInputProps {
  onChange: (value: string) => void;
  value: string;
  size?: 'small' | 'large' | 'normal';
  theme?: 'primary' | 'secondary';
  type?: string;
  placeholder?: string;
  sx?: React.CSSProperties;
}

const StyledTextInput = styled.input`
  border: none;
  width: 100%;
  position: relative;
  padding-inline: 15px;
  border-radius: 10px;
  background-color: ${colors.white};
  border: 1px solid ${(props) => props.theme.bc};
  outline: none;
`;

const themes = {
  primary: {
    bc: colors.gray,
  },
  secondary: {
    bc: colors.secondary,
  }
};

export default function TextField({
  onChange, value, size, theme, type, placeholder, sx
}: TextInputProps) {
  return (
    <StyledTextInput 
      type={type || 'text'}
      value={value}
      onChange={({ target }) => onChange(target.value)}
      placeholder={placeholder}
      theme={themes[theme || 'primary']}
      style={{ 
        ...sx,
        paddingBlock: inputHeights[size || 'normal'],
      }}
    />
  );
}
