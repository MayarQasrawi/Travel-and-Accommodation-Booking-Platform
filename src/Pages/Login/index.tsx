import React, { useState } from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import api from '@/services/axios';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import FormikTextInput from '@/components/FormikTextInput';
import { LoginFormSchema } from './LoginFormSchema';
import { LockIcon, Mail } from 'lucide-react';

interface LoginValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { setAuth } = useAuth();
  const [formError, setFormError] = useState<string | null>(null);

  const initialValues: LoginValues = { email: '', password: '' };

  const onSubmit = async (values: LoginValues, { setSubmitting }: FormikHelpers<LoginValues>) => {
    setFormError(null);
    try {
      const res = await api.post('/auth/login', values);
      const token = res?.data?.token ?? res?.data?.accessToken;
      if (!token) {
        setFormError('Login succeeded but no token returned');
      } else {
        setAuth(token);
      }
    } catch (err: unknown) {
      let message = 'Login failed';
      if (typeof err === 'object' && err !== null) {
        const maybe = err as {
          response?: { data?: { message?: string } };
          message?: string;
        };
        message = maybe.response?.data?.message ?? maybe.message ?? message;
      }
      setFormError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 text-center ">
      <h1 className="text-2xl font-semibold mb-4">Welcome Back</h1>
      <h2>Enter your email and password to access your account.</h2>

      <Formik initialValues={initialValues} validationSchema={LoginFormSchema} onSubmit={onSubmit}>
        {({ isSubmitting, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormikTextInput
              label="Email"
              name="email"
              type="email"
              addon={<Mail size={18} />}
              placeholder="Enter your email"
            />

            <FormikTextInput
              label="Password"
              name="password"
              type="password"
              addon={<LockIcon size={18} />}
              placeholder="Enter your password"
            />

            {formError && <div className="text-sm text-destructive">{formError}</div>}

            <div className="flex items-center justify-between">
              <Button type="submit" disabled={isSubmitting} className='w-full' >
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
