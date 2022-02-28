import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import Input from "./Input";

export default function FormField({ name, ...otherProps }) {
  const { touched, errors, handleChange, setFieldTouched } = useFormikContext();
  return (
    <>
      <Input
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </>
  );
}
