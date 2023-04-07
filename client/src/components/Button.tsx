import React, { useMemo } from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

export interface ButtonProps {
  onCLick: () => void;
  children: React.ReactNode;
  type?: 'cancel' | 'submit' | 'normal';
  size?: 'small' | 'large' | 'normal';
  sx?: React.CSSProperties;
}

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  padding-inline: 15px;
  border-radius: 10px;
  min-width: 100px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
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

const cancelTheme = {
  fc: colors.white,
  bg: colors.error,
};

const submitTheme = {
  fc: colors.white,
  bg: colors.success,
};

const normalTheme = {
  fc: colors.black,
  bg: colors.tertiary,
};

export default function Button({ onCLick, type, size, children, sx }: ButtonProps) {
  const theme = useMemo(() => {
    switch (type) {
    case 'cancel':
      return cancelTheme;
    case 'submit':
      return submitTheme;
    default:
      return normalTheme;
    }
  }, [type]);

  const paddingBlock = useMemo(() => {
    switch (size) {
    case 'small':
      return '8px';
    case 'large':
      return '12px';
    default:
      return '10px';
    }
  }, [size]);

  return (
    <StyledButton
      onClick={onCLick}
      theme={theme}
      style={{ 
        paddingBlock,
        ...sx,
      }}
    >
      {children}
    </StyledButton>
  );
}
