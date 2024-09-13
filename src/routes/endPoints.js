export const BASE_URL = "http://192.168.29.105:4002/";

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
<<<<<<< Updated upstream
=======
// Dashboard :
export const teacherDashboardAPI = "teacher/dashboard-details";
export const teacherStudentListAPI = "teacher/get-all-student";
export const teacherCreateStudentAPI = "teacher/create-student";
export const teacherUploadFileAPI = "teacher/upload-csv-student";
export const teacherUpdateStudentAPI = "teacher/update-student";
export const teacherDeleteStudentAPI = "teacher/delete-student";
// CLASSES
export const teacherClassesAPI = "teacher/get-classes";
export const teacherCreateClassAPI = "teacher/create-class";
export const teacherClassesFilterAPI = "filter-by-class-type-and-month";
>>>>>>> Stashed changes

export const teacherFetchClassTypeListAPI = "teacher/get-all-class-type";
export const teacherDeleteClassTypeAPI = "teacher/delete-class-type";
export const teacherCreateClassTypeAPI = "teacher/create-class-type";
export const teacherUpdateClassTypeAPI = "teacher/update-class-type";

//Billing
export const teacherBillingAPI = "teacher/billing-details";

//STUDENT

export const studentLoginAPI = "student/login";
<<<<<<< Updated upstream
export const studentForgotPassword = 'student/forgot-password';
export const studentUpdateProfile = 'student/update-profile';
export const studentProfile = 'student/profile';
=======
export const studentForgotPassword = "student/forgot-password";
export const studentUpdateProfile = "student/update-profile";
export const studentProfile = "student/profile";
export const getAllTeacherList = "student/get-teacher-list";
export const getClassByTeacher = "student/get-class-by-teacher";
export const studentBillingAPI = "student/billing-details";
export const studentMyBookedClasses = "student/get-all-booked-classes";
>>>>>>> Stashed changes
