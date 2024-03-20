import toast from "react-hot-toast";

export function CapitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function CapitalizeAllLetter(value: string) {
  return value.toUpperCase();
}

export function ReturnProperty({
  condition,
  trueValue,
  falseValue,
}: {
  condition: boolean;
  trueValue: string;
  falseValue: string;
}) {
  if (condition) return trueValue;
  if (!condition) return falseValue;
}

type NotifyProps = {
  type: "success" | "error" | "loading";
  message: string;
};

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
        toast.dismiss(x)
      }, 1500);
      return
    default:
      return toast.error(`Something went wrong: ${message}`);
  }
}
