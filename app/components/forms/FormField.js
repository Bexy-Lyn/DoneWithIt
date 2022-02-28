import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import Input from "./Input";

export default function FormField({ name, width = "100%", ...otherProps }) {
  const { touched, errors, handleChange, setFieldTouched } = useFormikContext();
  return (
    <>
      <Input
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </>
  );
}
