import toast from "react-hot-toast";
import React from "react";

interface NotifyProps {
  type: "success" | "error" | "loading";
  message: string;
}

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
