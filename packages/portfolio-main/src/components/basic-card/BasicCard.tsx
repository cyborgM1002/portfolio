import React from "react";
import { ReturnProperty } from "../../pages";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  src: string;
  title: string;
  subtitle: string;
  reverse?: boolean;
  btnTitle: string;
  btnText: string;
  handleOnClick: () => void;
}

const BasicCard = ({
  handleOnClick,
  btnTitle,
  btnText,
  src,
  title,
  subtitle,
  reverse = true,
}: Props) => {
  return (
    <div
      className={`${ReturnProperty({
        condition: reverse,
        trueValue: "flex-row-reverse",
        falseValue: "flex-row",
      })} flex p-4 gap-5 w-full`}
    >
      <div className='w-3/5 transform cursor-grab transition-transform duration-300 hover:scale-110'>
        <img className='w-full' src={src} alt='Passkey App' />
      </div>

      <div
        className={`${ReturnProperty({
          condition: reverse,
          trueValue: "justify-start",
          falseValue: "justify-end",
        })} flex flex-col items-center gap-5 my-auto p-4 w-2/5`}
      >
        <div className='mx-auto px-3 text-wrap text-left'>
          <h3 className='text-4xl font-semibold'>{title}</h3>
          <div className='mt-6 text-sm'>{subtitle}</div>
        </div>
        <div className='w-full flex flex-col justify-start items-center gap-5 mx-auto'>
          <div className='mx-auto px-3 text-wrap text-left'>
            <h1 className='text-xl font-semibold'>{btnTitle}</h1>
          </div>
          <button
            onClick={handleOnClick}
            className='bg-green-600 hover:bg-green-700 py-2 px-5 shadow-md shadow-gray-600 rounded-full mx-auto'
          >
            <span className='text-gray-50 text-xl font-bold'>{btnText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
