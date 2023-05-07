"use client";

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputElementProps,
} from "@chakra-ui/react";
import { Control, useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  label: string;
  showLabel?: boolean;
  helpText?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  control?: Control;
}

function FormField({
  name,
  label,
  helpText,
  required = false,
  readonly = false,
  disabled = false,
  control,
  showLabel = true,
  ...props
}: FormFieldProps & InputElementProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isInvalid = !!errors[name];

  return (
    <FormControl
      isInvalid={isInvalid}
      isRequired={required}
      isReadOnly={readonly}
      isDisabled={disabled}
    >
      {showLabel && (
        <FormLabel mb="0.5rem" htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <Input
        focusBorderColor={isInvalid ? "danger.600" : "primary.main"}
        errorBorderColor="danger.main"
        {...props}
        {...register(name)}
      />
      {helpText && <FormHelperText>{helpText}</FormHelperText>}

      {errors[name] && (
        <FormErrorMessage>{errors[name]?.message?.toString()}</FormErrorMessage>
      )}
    </FormControl>
  );
}

export default FormField;
