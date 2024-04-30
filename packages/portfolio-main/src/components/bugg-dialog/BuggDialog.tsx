import React from "react";
import { ReturnProperty } from "../../pages";

interface Props {
  condition: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const BuggDialog = ({ condition, onClose, children }: Props) => {
  return (
    <div
      onClick={onClose}
      className={`${ReturnProperty({
        condition: condition,
        trueValue: "h-screen",
        falseValue: "h-0",
      })} w-full -top-20 absolute duration-500 bg-black/40 overflow-hidden flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default BuggDialog;
