import { useFormikContext } from "formik";
import React from "react";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "./ImageInputList";

export default function FormImagePicker({ name }) {
  const { touched, errors, values, setFieldValue, setFieldTouched } =
    useFormikContext();

  const removeImage = (uri) => {
    setFieldValue(
      name,
      values[name].filter((img) => img !== uri)
    );
  };
  const addImage = (uri) => {
    setFieldTouched();
    setFieldValue(name, [...values[name], uri]);
  };

  return (
    <>
      <ImageInputList
        images={values[name]}
        onRemoveImage={removeImage}
        onAddImage={addImage}
      />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </>
  );
}
