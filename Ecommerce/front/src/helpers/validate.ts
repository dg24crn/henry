import {
  ILoginErrors,
  ILoginProps,
  IRegisterErrors,
  IRegisterProps,
} from "@/interfaces/IValidate";

export function validateLoginForm(values: ILoginProps) {
  const errors: ILoginErrors = {};

  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is incorrect";
  }

  return errors;
}

export function validateRegisterForm(values: IRegisterProps) {
  const errors: IRegisterErrors = {};

  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is incorrect";
  }
  if (!values.password) {
    errors.password = "Password is incorrect";
  }
  if (!values.name) {
    errors.name = "Name is incorrect";
  }
  if (!values.address) {
    errors.address = "Address is incorrect";
  }
  if (!values.phone) {
    errors.phone = "Phone is incorrect";
  }
  return errors;
}
