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

interface FormProps {
  validationSchema: ZodSchema;
  onSubmit?: (data: FieldValues) => void;
  children: React.ReactNode | React.ReactNode[];
  containterStyle?: BoxProps;
  defaultValues?: DefaultValues<any>;
}
const defaultSubmit = (data: FieldValues) => console.log("Form response", data);

function Form<InputValues extends FieldValues>({
  validationSchema,
  onSubmit = defaultSubmit,
  children,
  containterStyle,
  defaultValues,
}: FormProps) {
  const methods = useForm<InputValues>({
    resolver: zodResolver(validationSchema),
    defaultValues,
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
          {...containterStyle}
        >
          {children}
        </AppBox>
      </FormProvider>
      <DevTool control={methods.control} placement="bottom-right" />
    </>
  );
}

export default Form;
