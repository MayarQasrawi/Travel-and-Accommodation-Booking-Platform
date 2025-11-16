import React from 'react';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import { Button } from '@/components/ui/button';
import FormikTextInput from '@/components/Form/FormikTextInput';
import { LoginFormSchema } from '../../LoginFormSchema';
import { LockIcon, User } from 'lucide-react';
import Spinner from '@/components/spinner';
import { FormError } from '@/components/Form/FormError';
import { useLoginMutation } from '../../hooks/useLoginMutation';
import type { LoginPayload as LoginValues } from '../../API/types';

const LoginForm: React.FC = () => {
  const initialValues: LoginValues = { userName: '', password: '' };

  const { mutateAsync, error } = useLoginMutation();

  const onSubmit = async (values: LoginValues, { setSubmitting }: FormikHelpers<LoginValues>) => {
    try {
      await mutateAsync(values);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 text-center ">
      <Formik initialValues={initialValues} validationSchema={LoginFormSchema} onSubmit={onSubmit}>
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormikTextInput
              label="User Name"
              name="userName"
              type="text"
              addon={<User size={18} />}
              placeholder="Enter your name"
            />
            <FormikTextInput
              label="Password"
              name="password"
              type="password"
              addon={<LockIcon size={18} />}
              placeholder="Enter your password"
            />
            <FormError message={error?.message ?? ''} />

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Spinner className="mr-2 h-4 w-4" />
                  Signing in...
                </>
              ) : (
                'Sign in'
              )}
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
