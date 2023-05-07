"use client";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormProps {
  validationSchema: ZodSchema;
  onSubmit?: (data: FieldValues) => void;
  children: React.ReactNode | React.ReactNode[];
}
const defaultSubmit = (data: FieldValues) => console.log("Form response", data);

function Form({
  validationSchema,
  onSubmit = defaultSubmit,
  children,
}: FormProps) {
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: zodResolver(validationSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => {
        reset();
      }}
    ></form>
  );
}

export default Form;
