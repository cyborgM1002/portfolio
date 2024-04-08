import toast from "react-hot-toast";
import { NotifyProps } from "../../types/types";
import React from "react";

export default function Notify({ type, message }: NotifyProps) {
  switch (type) {
    case "success":
      return toast.success(message ?? "Failed to load message");
    case "error":
      return toast.error(message ?? "Failed to load message");
    case "loading":
      const messageBar = toast.loading(message ?? "loading...");
      setTimeout(() => {
        toast.dismiss(messageBar);
      }, 1500);
      return;
    default:
      return toast.error(`Something went wrong: ${message}`);
  }
}
