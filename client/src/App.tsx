import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Login from './pages/Login';
import colors from './constants/colors';

const StyledApp = styled.div`
  padding: 0;
	margin: 0;
  height: 100vh;
	width: 100vw;
  background-color: ${colors.primary};
`;

export default function App () {
  return (
    <StyledApp>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </StyledApp>
  );
}
