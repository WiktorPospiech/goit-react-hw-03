import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
});

const initialValues = {
  username: "",
  email: "",
};

export default function FeedbackForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" />
        <ErrorMessage name="username" as="span" />
        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" />
        <button type="submit">Submit</button>
        <ErrorMessage name="email" as="span" />
      </Form>
    </Formik>
  );
}

// export default function ContactForm() {
//   return <>{FeedbackForm}</>;
// }
