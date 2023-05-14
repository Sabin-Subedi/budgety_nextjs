"use client";
import { BoxProps } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  useForm,
} from "react-hook-form";
import { AppBox } from "ui";
import { ZodSchema } from "zod";
import { DevTool } from "@hookform/devtools";
import { defaultFormValues } from "@/constants/defaultFormValues";

interface FormProps<T> {
  defaultValues: DefaultValues<T>;
  validationSchema: ZodSchema;
  onSubmit?: (data: T) => void;
  children: React.ReactNode | React.ReactNode[];
  containerStyle?: BoxProps;
  formName: string;
}
const defaultSubmit = (data: FieldValues) => console.log("Form response", data);

function Form<InputValues extends FieldValues>({
  validationSchema,
  onSubmit = defaultSubmit,
  children,
  formName,
  containerStyle,
  defaultValues,
}: FormProps<InputValues>) {
  const methods = useForm<InputValues>({
    resolver: zodResolver(validationSchema),
    defaultValues:
      process.env.NODE_ENV === "development"
        ? defaultFormValues[formName] || defaultValues
        : defaultValues,
    shouldFocusError: true,
  });

  return (
    <>
      <FormProvider {...methods}>
        <AppBox
          as="form"
          onSubmit={methods.handleSubmit(onSubmit)}
          onReset={() => {
            methods.reset();
          }}
          {...containerStyle}
        >
          {children}
        </AppBox>
      </FormProvider>
      <DevTool control={methods.control} placement="bottom-right" />
    </>
  );
}

export default Form;
