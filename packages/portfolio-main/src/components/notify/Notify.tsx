import toast from "react-hot-toast";
import React from "react";

function NotifySuccess(message: string) {
  return toast.success(message ?? "Success");
}
function NotifyError(message: string) {
  return toast.error(message ?? "Error");
}

export { NotifyError, NotifySuccess };
