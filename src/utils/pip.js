import { message as toast } from "antd";
import moment from "moment";

// Currency Symbol
export const curSym = "$";

// Authorization
export const pipSetAccessToken = (token) => {
  if (!token) return;
  else localStorage.setItem("AccessToken", token);
};

export const pipGetAccessToken = () => {
  return localStorage.getItem("AccessToken");
};

export const pipSaveTeacherProfile = (profile) => {
  localStorage.setItem("teacher-profile", JSON.stringify(profile));
};

export const pipGetTeacherProfile = () => {
  const profile = localStorage.getItem("teacher-profile");
  return profile ? JSON.parse(profile) : {};
};

export const setAuth = (token) => {
  if (!token) return;
  localStorage.setItem("TOKEN", token);
};

export const getAuth = () => {
  const token = localStorage.getItem("TOKEN");
  if (!token) return;
  return token;
};

export const setAuthStudent = (token) => {
  if (!token) return;
  localStorage.setItem("STUDENT-TOKEN", token);
};

export const getAuthStudent = () => {
  const token = localStorage.getItem("STUDENT-TOKEN");
  if (!token) return;
  return token;
};

// Date View Format
export const pipViewDate = (date) => {
  return moment(date).format("DD-MM-YYYY");
};

export const pipViewTime = (value) => {
  return moment(value).format("hh:mm A");
};

export const clearAuth = () => {
  toast.success("Successfully logged out");
  localStorage.removeItem("AccessToken");
  localStorage.removeItem("register_step");
  localStorage.removeItem("teacher-profile");
  localStorage.removeItem("teacher-stream");
  localStorage.removeItem("teacher-theme");
};

export const pipSuccessMessage = (message) => {
  return toast.success(message);
};

export const pipErrorMessage = (message) => {
  return toast.error(message);
};

export const pipSaveProfile = (profile) => {
  if (!profile) return;
  localStorage.setItem("user_data", JSON.stringify(profile));
};

export const pipGetProfile = () => {
  return JSON.parse(localStorage.getItem("user_data"));
};

// Register form step
export const pipSetRegisterStep = (step) => {
  console.log({step})
  localStorage.setItem("register_step", step);
};

export const pipGetRegisterStep = () => {
  const step = parseInt(localStorage.getItem("register_step"));
  if (step) return step;
};

