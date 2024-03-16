import * as Yup from "yup";

export const franchiseSchema = Yup.object({
  email: Yup.string().email().required("This field is mandatory"),
  state: Yup.string().min(2).max(50).required("This field is mandatory"),
  category: Yup.string().required("This field is mandatory"),
  name: Yup.string()
    .min(2)
    .max(50)
    .required("This field is mandatory")
    .matches(
      /^[a-zA-Z ]+$/,
      "Name cannot have special characters and whitespaces"
    )
    .strict(true)
    .trim(),
});
