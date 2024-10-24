import { message as toast } from "antd";
import moment from "moment";

// Currency Symbol
export const curSym = "$";

// Teacher Authorization :
export const pipSetAccessToken = (token) => {
  if (!token) return;
  else localStorage.setItem("AccessToken", token);
};
export const pipGetAccessToken = () => {
  return localStorage.getItem("AccessToken");
};

// Teacher Profile :
export const pipSaveTeacherProfile = (profile) => {
  localStorage.setItem("teacher-profile", JSON.stringify(profile));
};
export const pipGetTeacherProfile = () => {
  const profile = localStorage.getItem("teacher-profile");
  return profile ? JSON.parse(profile) : {};
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

export const pipSaveStudentProfile = (profile) => {
  if (!profile) return;
  localStorage.setItem("student-profile", JSON.stringify(profile));
};

export const pipGetStudentProfile = () => {
  const profile = localStorage.getItem("student-profile");
  return profile ? JSON.parse(profile) : null;
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

// Register form step
export const pipSetRegisterStep = (step) => {
  localStorage.setItem("register_step", step);
};

export const pipGetRegisterStep = () => {
  const step = parseInt(localStorage.getItem("register_step"));
  if (step) return step;
};

//
export const isPastClassTime = (classDate, classTime) => {
  if (!classDate || !classDate) return;
  const currentTime = new Date();

  // Parse class date and time
  const [time, period] = classTime?.split(" ");
  const [hours, minutes] = time?.split(":")?.map(Number);
  let hours24Format = hours;

  // Convert PM times to 24-hour format
  if (period === "PM" && hours24Format !== 12) {
    hours24Format += 12;
  }
  if (period === "AM" && hours24Format === 12) {
    hours24Format = 0; // Handle 12 AM as 0 hours
  }

  // Create a Date object for the class with time set
  const classDateTime = new Date(classDate);
  classDateTime.setHours(hours24Format, minutes || 0, 0, 0); // Set hours and minutes

  // Return true if the class time is in the past
  return classDateTime < currentTime;
};
export const getDayName = (dateString) => {
  const dateObject = new Date(dateString);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dateObject.getDay()];
};

// Get Time View

export const getTimeView = (time) => {
  if (!time) return;
  return moment(time).format("hh:mm A");
};

export const checkPage = (page) => {
  if (!page) return;
  return page == "student" ? true : false;
};

export const getSubstring = (str, len, appendStr = "...") => {
  if(!str) return "";
  if (str?.length <= len) return str;
  return str?.substring(0, len) + appendStr;
};

export const saveTheme = () => {
  const theme_color = pipGetTeacherProfile()?.theme_color;
  if (!theme_color) return;
  const root = document.documentElement;
  const lightenColor = (color, percent) => {
    const num = parseInt(color?.slice(1), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = ((num >> 8) & 0x00ff) + amt,
      B = (num & 0x0000ff) + amt;
    return (
      "#" +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      )
        .toString(16)
        .slice(1)
        .toUpperCase()
    );
  };

  const lighterTheme = lightenColor(theme_color, 40);

  root.style.setProperty("--dark_purple", theme_color);
  root.style.setProperty("--light_purple_bg", lighterTheme);
};
