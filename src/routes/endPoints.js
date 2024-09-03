export const BASE_URL = "http://192.168.29.105:4000/";

// TEACHER API ENDPOINTS :

// Auth :
export const teachLoginAPI = "teacher/login";
export const teachRegisterAPI = "teacher/register";
export const teachForgotPasswordAPI = "teacher/forgot-password";
export const teacherChangePasswordAPI = "teacher/change-password";
// Profile :
export const teachProfileAPI = "teacher/profile"; // get profile
export const teachUpdateProfileAPI = "teacher/profile/update";
export const teacherCreateBasicDetailsAPI = "teacher/update-basic-details";
export const teacherStudentAndPricingAPI = "teacher/update-student-and-pricing";
export const teacherBankDetailAPI = "teacher/update-bank-details";
export const teacherStudentListAPI = "teacher/get-all-student";
export const teacherCreateStudentAPI = "teacher/create-student";
export const teacherUploadFileAPI = "teacher/upload-csv-student";
export const teacherUpdateStudentAPI = "teacher/update-student";
export const teacherDeleteStudentAPI = "teacher/delete-student";

//Students

export const studentLoginAPI = "student/login";
export const studentForgotPassword = "student/forgot-password";
export const studentUpdateProfile = "student/update-profile";
export const studentProfile = "student/profile";
