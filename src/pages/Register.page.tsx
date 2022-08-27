import React from 'react';
import AuthLayout from '../features/auth/components/AuthLayout';
import RegistrationFormComponent from '../features/auth/components/RegistrationForm.component';

const Registerpage = () => {
  return (
    <AuthLayout>
      <RegistrationFormComponent />
    </AuthLayout>
  );
};

export default Registerpage;
