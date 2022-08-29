import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './shared/utils/theme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Homepage from './pages/Home.page';
import Registerpage from './pages/Register.page';
import Signinpage from './pages/Signin.page';
import PrivateRoute from './features/auth/components/PrivateRoute';
import CartPage from './pages/Cart.page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute page={<Homepage />} />} />
          <Route path="/cart" element={<PrivateRoute page={<CartPage />} />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/signin" element={<Signinpage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
