import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter a valid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email address"
        ),
    password: Yup.string()
        .required("Please enter password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
});

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter a valid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email address"
        )
});

export const signUpSchema = Yup.object().shape({
    user_name: Yup.string().required("Please enter user name"),
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter a valid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email address"
        ),
    password: Yup.string()
        .required("Please enter password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    confirmPassword: Yup.string()
        .required("Please enter confirm password")
        .oneOf([Yup.ref("password"), null], "Your password must match"),
});

export const changePasswordSchema = Yup.object().shape({
    currPassword: Yup.string()
      .required("Please enter your current password")
      .min(8, "Current Password cannot be less then 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
        "Please enter a valid password"
      ),
    newPassword: Yup.string()
      .required("Please enter new password")
      .min(8, "New Password cannot be less then 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
        "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
      ),
    confirmPassword: Yup.string()
      .required("Please enter confirm password")
      .oneOf([Yup.ref("newPassword"), null], "Your password must match"),
  });

export const myProfileSchema = Yup.object().shape({
    full_name: Yup.string().required("Please enter full name"),
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter a valid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email address"
        ),
    stream: Yup.string().required("Please enter stream"),
    theme_colour_code: Yup.string().required("Please select theme colour code")
});