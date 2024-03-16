import { useFormik } from "formik";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { franchiseSchema } from "@/utils/schemas";
const useContactUs = () => {
  const initialValues = {
    name: "",
    email: "",
    state: "",
    category: "",
  };

  const [isLoading, setIsLoading] = useState(-1);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: franchiseSchema,
    onSubmit: async (values) => {
      setIsLoading(0);
      var templateParams = {
        name: values?.name,
        email: values?.email,
        message: `name:${values?.name}\nemail:${values?.email}\nstate:${values?.state}\ncategory:${values?.category}`,
      };
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          templateParams,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
          setIsLoading(-1);
        });
    },
  });
  return {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
  };
};

export default useContactUs;
