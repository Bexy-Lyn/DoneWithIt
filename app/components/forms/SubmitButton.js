import { useFormikContext } from "formik";
import React from "react";
import Button from "../Button";

export default function SubmitButton({ children }) {
  const { handleSubmit } = useFormikContext();
  return <Button onPress={handleSubmit}>{children}</Button>;
}
