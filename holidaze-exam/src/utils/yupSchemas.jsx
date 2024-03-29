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
  bedroom: yup.number().required("Please enter how many bedrooms"),
  guests: yup.number().required("Please enter how many guests"),
  square: yup.number().required("Please enter how many square meters"),
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

export const reservationSchema = yup.object().shape({
  name: yup.string().required("Please enter your full name"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  note: yup.string().required("Please enter a message"),
  guests: yup.number().required("Please enter the number of guests"),
  checkin: yup.date().required("please enter a date"),
  checkout: yup.date().required("please enter a date"),
});
