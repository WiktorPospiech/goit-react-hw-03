import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number()
    // .min(2, "Too Short!")
    // .max(50, "Too Long!")
    .typeError("you must specify a number")
    .required("Required"),
});

const initialValues = {
  id: "id-" + nanoid(),
  name: "",
  number: "",
};

export default function FeedbackForm({ onSubmit }) {
  const nameFieldId = useId();
  const userFieldId = useId();

  // const handleSubmit = (values, actions) => {
  //   console.log(values);
  //   actions.resetForm();
  // };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" as="span" />
        <label htmlFor={userFieldId}>Number</label>
        <Field type="tel" name="number" id={userFieldId} />
        <button type="submit">Add Contact</button>
        <ErrorMessage name="number" as="span" />
      </Form>
    </Formik>
  );
}
