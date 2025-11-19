import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
  userName: yup.string().min(4, 'Username must be at least 4 characters').required('Username is required'),
  password: yup
    .string()
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required'),
});
