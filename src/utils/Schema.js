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
    ),
});

export const signUpSchema = Yup.object().shape({
  username: Yup.string().required("Please enter user name"),
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
  currentPassword: Yup.string()
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
  theme: Yup.string().required("Please select theme colour code"),
});

// Student Schemas

export const loginvalidationSchema = Yup.object({
  email: Yup.string()
    .email("Email address is not correct , please enter a valid email address")
    .required("Please enter email address"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .min(8, "Password cannot be less then 8 characters")
    .max(16, "Password cannot be more then 16 characters"),
});

export const editProfileValidationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters")
    .required("First name is required"),
  lastname: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  contact: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact number must be exactly 10 digits")
    .required("Contact number is required"),
  emergencyContact: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Emergency contact number must be exactly 10 digits"
    )
    .required("Emergency contact number is required"),
  address: Yup.string()
    .min(10, "Address must be at least 10 characters")
    .max(100, "Address cannot exceed 120 characters")
    .required("Address is required"),
  dob: Yup.date().required("Date of birth is required"),
  grade: Yup.string().required("Grade is required"),
  chooseServices: Yup.string().required("Services are required"),
  subject: Yup.string().required("Subject is required"),
  school: Yup.string().required("School is required"),
  otherNotes: Yup.string().max(200, "Other notes cannot exceed 200 characters"),
  parentFirstName: Yup.string()
    .min(2, "Parent first name must be at least 2 characters")
    .max(50, "Parent first name cannot exceed 50 characters")
    .required("Parent first name is required"),
  parentLastName: Yup.string()
    .min(2, "Parent last name must be at least 2 characters")
    .max(50, "Parent last name cannot exceed 50 characters")
    .required("Parent last name is required"),
  parentEmail: Yup.string()
    .email("Invalid parent email format")
    .required("Parent email is required"),
  parentContact: Yup.string()
    .matches(/^[0-9]{10}$/, "Parent contact number must be exactly 10 digits")
    .required("Parent contact number is required"),
  parentAddress: Yup.string()
    .min(10, "Parent address must be at least 10 characters")
    .max(100, "Parent address cannot exceed 120 characters")
    .required("Parent address is required"),
  group: Yup.string().required("Group is required"),
});

export const changePasswordValidationSchema = Yup.object().shape({
  old_password: Yup.string()
    .required("Old Password is required")
    .matches(/[A-Z]/, "New Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "New Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "New Password must contain at least one special character"
    )
    .min(8, "Password cannot be less then 8 characters")
    .max(16, "Password cannot be more then 16 characters"),
  new_password: Yup.string()
    .required("New Password is required")
    .matches(/[A-Z]/, "New Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "New Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "New Password must contain at least one special character"
    )
    .min(8, "Password cannot be less then 8 characters")
    .max(16, "Password cannot be more then 16 characters"),
  confirm_password: Yup.string()
    .oneOf(
      [Yup.ref("new_password"), null],
      "Password and confirm password must be equal "
    )
    .required("Confirm Password is required"),
});

export const forgetPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email address is not correct , please enter a valid email address")
    .required("Please enter email address"),
});
