import toast from "react-hot-toast";
import { NotifyProps } from "../../types/types";

export function Notify({ type, message }: NotifyProps) {
  switch (type) {
    case "success":
      return toast.success(message);
    case "error":
      return toast.error(message);
    case "loading":
      // eslint-disable-next-line no-case-declarations
      const x = toast.loading(message);
      setTimeout(() => {
        toast.dismiss(x);
      }, 1500);
      return;
    default:
      return toast.error(`Something went wrong: ${message}`);
  }
}
