import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import Selection from "./Selection";

export default function FormSelection({ name, onSelectItem, ...otherProps }) {
  const { touched, errors, values, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <>
      <Selection
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </>
  );
}
