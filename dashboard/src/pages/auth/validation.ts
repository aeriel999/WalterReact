import * as Yup from "yup";

const passwordRegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{6,}$/;

const MAXIMUM_PASSWORD_LENGTH = 30;
const MINIMUM_PASSWORD_LENGTH = 6;

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address.")
        .required("This field is required.")
        .label("Email address."),
    password: Yup.string()
        .required("This field is required.")
        .max(
            MAXIMUM_PASSWORD_LENGTH,
            `Maximum password length is ${MAXIMUM_PASSWORD_LENGTH} characters`
        )
        .min(
            MINIMUM_PASSWORD_LENGTH,
            `Minimum password length is ${MINIMUM_PASSWORD_LENGTH} characters`
        )
        .matches(passwordRegExp, "Password must contain A-Z, a-z, 0-9")
        .label("Password."),
});

export const RegisterSchema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    firstName: Yup.string().max(255) ,
    lastName: Yup.string().max(255) ,
    password: Yup.string()
      .max(255)
      .min(6)
      .required("Password is required")
      .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9"),
    confirmPassword: Yup.string()
      .max(255)
      .min(6)
      .required("Confirm password is required")
      .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });

  export const EditSchema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    firstName: Yup.string().max(255) ,
    lastName: Yup.string().max(255) ,
    
  });

  export const ChangePasswordSchema = Yup.object({
    
    password: Yup.string()
      .max(255)
      .min(6)
      .required("Password is required")
      .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9"),
    newPassword: Yup.string()
      .max(255)
      .min(6)
      .required("Password is required")
      .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9"),
      confirmNewPassword: Yup.string()
      .max(255)
      .min(6)
      .required("Confirm password is required")
      .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9")
      .oneOf([Yup.ref("newPassword")], "Passwords must match."),
  });
