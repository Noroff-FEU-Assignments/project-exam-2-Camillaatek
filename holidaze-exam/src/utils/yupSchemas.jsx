import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  password: yup.string().required("Please enter your password"),
});

export const bookingSchema = yup.object().shape({
  name: yup.string().required("Please enter a name"),
  description: yup.string().required("Please provide a description"),
  cost: yup.string().required("Please enter a value"),
  location: yup.string().required("Please enter a location"),
  rating: yup
    .number()
    .required("Please enter a number from 1.0 to 6.0")
    .min(0, "Min value 0")
    .max(6, "Max value 6"),
  image_url: yup.string().required("Please enter the image URL"),
});

export const contactSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  subject: yup.string().required("Please enter a subject"),
  message: yup.string().required("Please enter a message"),
});
