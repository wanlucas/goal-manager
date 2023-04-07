import React from 'react';
import styled from 'styled-components';
import { inputHeights } from '../constants/sizes';
import colors from '../constants/colors';

interface TextInputProps {
  onChange: (value: any) => void;
  value: string;
  name: string;
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
  &:focus {
    border: 1px solid ${(props) => props.theme.fc};
  }
  outline: none;
`;

const themes = {
  primary: {
    bc: colors.gray,
    fc: colors.secondary,
  },
  secondary: {
    bc: colors.secondary,
    fc: colors.black,
  }
};

export default function TextField({
  onChange, value, size, theme, name, type, placeholder, sx
}: TextInputProps) {
  return (
    <StyledTextInput 
      type={type || 'text'}
      value={value}
      name={name}
      placeholder={placeholder}
      theme={themes[theme || 'primary']}
      style={{ 
        ...sx,
        paddingBlock: inputHeights[size || 'normal'],
      }}
      onChange={({ target }) => {
        onChange((prev) => ({ ...prev, [name]: target.value }));
      }}
    />
  );
}
