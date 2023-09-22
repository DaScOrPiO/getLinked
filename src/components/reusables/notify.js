import { toast } from "react-toastify";

export const notifySuccess = (message) =>
  toast.success(message, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 1,
    theme: "dark",
  });

export const notifyError = (message) => {
  toast.error(message, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 1,
    theme: "dark",
  });
};
