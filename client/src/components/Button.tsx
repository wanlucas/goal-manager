import React, { useMemo } from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import { inputHeights } from '../constants/sizes';

interface ButtonProps {
  children: React.ReactNode;
  onCLick?: () => void;
  theme?: 'cancel' | 'submit' | 'primary';
  size?: 'small' | 'large' | 'normal';
  type?: string;
  sx?: React.CSSProperties;
}

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  padding-inline: 15px;
  border-radius: 10px;
  min-width: 100px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme.bg};
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fc};
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    filter: brightness(0.9);
    transform: scale(0.95);
  }
`;

const themes = {
  cancel: {
    fc: colors.white,
    bg: colors.error,
  },
  submit: {
    fc: colors.black,
    bg: colors.success,
  },
  primary: {
    fc: colors.white,
    bg: colors.secondary,
  }
};


export default function Button({ onCLick, theme, type, size, children, sx }: ButtonProps) {
  return (
    <StyledButton
      theme={themes[theme || 'primary']}
      type={type || 'button'}
      onClick={() => {
        if (onCLick) onCLick();
      }}
      style={{ 
        paddingBlock: inputHeights[size || 'normal'],
        ...sx,
      }}
    >
      {children}
    </StyledButton>
  );
}
