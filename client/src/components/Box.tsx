import React, { useMemo } from 'react';
import styled from 'styled-components';

interface BoxProps {
  children: React.ReactNode;
  alignment?: 'start' | 'center' | 'end';
  sx?: React.CSSProperties;
}

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  gap: 10px;
`;

export default function Box({ children, alignment, sx }: BoxProps) {
  const alignItems = useMemo(() => {
    switch (alignment) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    default:
      return 'center';
    }
  }, [alignment]);

  return (
    <StyledBox style={{ alignItems, ...sx }}>{ children }</StyledBox>
  );
}
