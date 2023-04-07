import React from 'react';
import styled from 'styled-components';

interface SectionProps {
  children: React.ReactNode;
}

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default function Section({ children }: SectionProps) {
  return (
    <StyledSection>{ children }</StyledSection>
  );
}
