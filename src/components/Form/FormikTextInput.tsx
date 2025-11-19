import React from 'react';
import { useField, useFormikContext } from 'formik';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import FormError from './FormError';

interface FormikTextInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  addon?: React.ReactNode;
}

export const FormikTextInput: React.FC<FormikTextInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  addon,
}) => {
  useFormikContext();
  const [field, meta] = useField({ name });
  const hasError = meta.touched && meta.error;

  return (
    <div className="space-y-2">
      <InputGroup>
        {addon && <InputGroupAddon> {addon}</InputGroupAddon>}
        <InputGroupInput
          id={name}
          {...field}
          type={type}
          placeholder={placeholder}
          aria-label={label}
        />
      </InputGroup>
      <FormError message={hasError ? meta.error : ''} />
    </div>
  );
};

export default FormikTextInput;
