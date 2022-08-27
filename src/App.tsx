import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './shared/utils/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home.page';
import Registerpage from './pages/Register.page';
import Signinpage from './pages/Signin.page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/signin" element={<Signinpage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
