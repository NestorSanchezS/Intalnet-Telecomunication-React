import * as yup from "yup";

export const formContactusSchema = yup.object().shape({
  servi: yup.string().required("Este campo es requrido"),
  address: yup.string().required("Este campo es requerido"),
  name: yup.string().required("Este campo es requerido"),
  phone: yup
    .number("Inserte num celular valido ")
    .positive()
    .required("Este campo es requerido"),
  email: yup
    .string()
    .email("Inserta un email valido")
    .required("Este camp es requerido"),
  message: yup.string().required("Este campo es requerido"),
});

export const formPqrSchema = yup.object().shape({
  namepqr: yup.string().required("Este campo es requerido"),
  phonepqr: yup
    .number("Inserte num celular valido ")
    .positive()
    .required("Este campo es requerido"),
  emailpqr: yup
    .string()
    .email("Inserta un email valido")
    .required("Este camp es requerido"),
  addresspqr: yup.string().required("Este campo es requerido"),
  messagepqr: yup.string().required("Este campo es requerido"),
});
