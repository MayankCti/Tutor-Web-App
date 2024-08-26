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

// Date View Format
export const pipViewDate = (date) => {
  return moment(date).format("DD-MM-YYYY");
};

export const clearAuth = () => {
  toast.success("Successfully logged out");
  localStorage.removeItem("AccessToken");
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
  localStorage.setItem("register_step", step);
};

export const pipGetRegisterStep = () => {
  const step = parseInt(localStorage.getItem("register_step"));
  if (step) return step;
};
