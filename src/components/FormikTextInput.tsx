import React from 'react';
import { useField, useFormikContext } from 'formik';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';

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
  // Ensure we're inside a Formik context
  useFormikContext();

  const [field, meta] = useField({ name });

  // Only show error if field was touched
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
      {hasError && <div className="text-sm text-destructive text-left">{meta.error}</div>}
    </div>
  );
};

export default FormikTextInput;
