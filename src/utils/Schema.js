import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .required("Please enter email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
      "Please enter a valid email"
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
    .trim()
    .email("Please enter a valid email")
    .required("Please enter email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
      "Please enter a valid email"
    ),
});

export const signUpSchema = Yup.object().shape({
  username: Yup.string().required("Please enter user name").trim(),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .required("Please enter email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
      "Please enter a valid email"
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
  full_name: Yup.string().required("Please enter full name").trim(),
  username: Yup.string().required("Please enter username").trim(),
  max_student_headcount: Yup.string()
    .required("Please enter max student headcount")
    .min(1000, "max student headcount must be at least 1000 characters"),
  per_hour_pricing: Yup.string().required("Please enter per hour price"),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .required("Please enter email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
      "Please enter a valid email"
    ),
  stream: Yup.string().required("Please enter stream").trim(),
  theme: Yup.string().required("Please select theme colour code").trim(),
});
export const basicDetailSchema = Yup.object().shape({
  // file: Yup.mixed()
  //   .test("fileType", "Invalid file type", (value) => {
  //     if (!value) return true;
  //     const validFileTypes = [
  //       "image/jpeg",
  //       "image/jpg",
  //       "image/png",
  //       "image/gif",
  //     ];
  //     return validFileTypes.includes(value.type);
  //   })?.optional(),
  full_name: Yup.string().required("Please enter full name").trim(),
  theme: Yup.string().required("Please select theme colour code").trim(),
  coaching_classes_name: Yup.string()
    .required("Please enter class name")
    .trim(),
  contact_number: Yup.string()
    .matches(/^[0-9]{5,13}$/, {
      message: "Please enter valid contact number",
      excludeEmptyString: true,
    })
    .required("Please enter contact number"),
  stream: Yup.string().required("Please enter stream").trim(),
  address: Yup.string().required("Please enter address").trim(),
});

export const secondStepSchema = Yup.object().shape({
  max_student_headcount: Yup.number()
    .typeError("Max Students Headcount must be a number")
    .required("Please enter Max Students Headcount")
    .positive("Max Students Headcount must be a positive number")
    .integer("Max Students Headcount must be an integer")
    .min(1000, "max student headcount must be at least 1000 characters"),
  per_hour_pricing: Yup.number()
    .typeError("Per hour pricing must be a number")
    .required("Please enter per hour pricing")
    .positive("Per hour pricing must be a positive number"),
});

export const BankDetailSchema = Yup.object({
  account_number: Yup.string()
    .required("Please enter account number")
    .matches(/^[0-9]{6,15}$/, "Account Number must be 6-15 digits"),
  bank_name: Yup.string()
    .trim()
    .required("Please enter bank name")
    .matches(/^[a-zA-Z\s]+$/, "Bank Name must contain only letters"),
  ifsc_code: Yup.string()
    .matches(/^\d{6}$/, {
      message: "Invalid BSB code. The BSB code must be exactly 6 digits.",
      excludeEmptyString: true,
    })
    .required("Please enter BSB code"),
});

export const createStudentSchema = Yup.object().shape({
  first_name: Yup.string().required("Please enter first name").trim(),
  last_name: Yup.string().required("Please enter last name").trim(),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .required("Please enter email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
      "Please enter a valid email"
    ),
  contact_number: Yup.string()
    .matches(/^[0-9]{5,13}$/, {
      message: "Please enter valid contact number",
      excludeEmptyString: true,
    })
    .required("Please enter contact number"),
  emergency_contact_number: Yup.string()
    .matches(/^[0-9]{5,13}$/, {
      message: "Please enter valid contact number",
      excludeEmptyString: true,
    })
    .required("Please enter emergency contact number"),
  date_of_birth: Yup.date()
    .max(new Date(), "Date of birth must be a past date")
    .required("Please enter date of birth"),
  grade: Yup.string()?.required("Please enter grade"),
  school_name: Yup.string()?.required("Please enter school name").trim(),
  city: Yup.string()?.required("Please enter city").trim(),
  address: Yup.string()?.required("Please enter address").trim(),
  student_status: Yup.string().required("Please select student status").trim(),
});

export const createClassTypeSchema = Yup.object().shape({
  class_type_name: Yup.string().required("Please enter class type").trim(),
  student_count: Yup.number()
    .typeError("Student count must be a number")
    .positive("Student count must be a positive number")
    .integer("Student count must be an integer")
    .min(1, "Student count must be at least 1")
    .required("Please enter student count"),
});
// Student Schemas

export const loginvalidationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .required("Please enter email"),
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
  first_name: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters")
    .required("First name is required"),
  last_name: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters")
    .required("Last name is required"),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .required("Email is required"),
  contact_number: Yup.string()
    .matches(/^[0-9]{5,13}$/, "Please enter valid contact number")
    .required("Please enter contact number"),
  emergency_contact_number: Yup.string()
    .matches(/^[0-9]{5,13}$/, "Please enter valid emergency contact number")
    .required("Please enter emergency contact number"),
  address: Yup.string()
    .trim()
    .min(10, "Address must be at least 10 characters")
    .max(100, "Address cannot exceed 100 characters")
    .required("Address is required"),
  date_of_birth: Yup.date().required("Date of birth is required"),
  grade: Yup.string().required("Grade is required").trim(),
  subject: Yup.string().required("Subject is required").trim(),
  city: Yup.string().required("City is required").trim(),
  school_name: Yup.string().required("School is required").trim(),
  other_notes: Yup.string()
    .max(200, "Other notes cannot exceed 200 characters")
    .trim(),
  parent_first_name: Yup.string()
    .trim()
    .min(2, "Parent first name must be at least 2 characters")
    .max(50, "Parent first name cannot exceed 50 characters")
    .required("Parent first name is required"),
  parent_last_name: Yup.string()
    .trim()
    .min(2, "Parent last name must be at least 2 characters")
    .max(50, "Parent last name cannot exceed 50 characters")
    .required("Parent last name is required"),
  parent_email: Yup.string()
    .trim()
    .email("Please enter parent email")
    .required("Please enter parent email"),
  parent_contact_number: Yup.string()
    .matches(/^[0-9]{5,13}$/, "Please enter valid parent contact number")
    .required("Please enter parent contact number"),
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
    .trim()
    .email("Please enter a valid email")
    .required("Please enter email "),
});
