import toast from "react-hot-toast";
import { NotifyProps } from "../../types/types";
import React from "react";
import { PiWarningCircleBold } from "react-icons/pi";

export default function Notify({ type, message }: NotifyProps) {
  switch (type) {
    case "success":
      return toast.success(message);
    case "error":
      return toast.error(message);
    case "loading":
      const messageBar = toast.loading(message);
      setTimeout(() => {
        toast.dismiss(messageBar);
      }, 1500);
      return;
    default:
      return toast.error(`Something went wrong: ${message}`);
  }
}
