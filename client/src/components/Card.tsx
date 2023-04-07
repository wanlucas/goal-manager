import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

interface CardProps {
  children: React.ReactNode;
  sx?: React.CSSProperties;
}

const StyledCard = styled.div`
  display: flex;
  position: relative;
  align-items: center; 
  justify-content: center;
  background: ${colors.white};
  border-radius: 8px
  padding: 25px;
`;

export default function Card({ children, sx }: CardProps) {
  return (
    <StyledCard style={{ ...sx }}>{ children }</StyledCard>
  );
}
