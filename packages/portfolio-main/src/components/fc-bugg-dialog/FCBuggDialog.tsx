import React from "react";
import { ReturnProperty } from "../../pages";
import { ReturnFC } from "../../../../utils/utils";

interface Props {
  condition: boolean;
  FCcondition: boolean;
  FCTrue: React.ReactNode;
  FCFalse: React.ReactNode;
  onClose: () => void;
}

const FCBuggDialog = ({ condition, onClose, FCcondition, FCTrue, FCFalse }: Props) => {
  return (
    <div
      onClick={onClose}
      className={`${ReturnProperty({
        condition: condition,
        trueValue: "h-screen",
        falseValue: "h-0",
      })} w-full -top-20 absolute duration-500 bg-black/40 overflow-hidden flex items-center justify-center`}
    >
      {ReturnFC({
        condition: FCcondition,
        trueValue: FCTrue,
        falseValue: FCFalse,
      })}
    </div>
  );
};

export default FCBuggDialog;
