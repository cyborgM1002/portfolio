import React from "react";
import { ReturnProperty } from "../../pages";

interface Props {
  src: string;
  title: string;
  subtitle: string;
  reverse?: boolean;
  isPasskeySupported: boolean;
  passkeySupportedTitle: string;
  passkeySupportedSubTitle: string;
  passkeySupportedBtnText: string;
  handleOnClick: () => void;
}

const BasicCard = ({
  src,
  title,
  subtitle,
  reverse = true,
  isPasskeySupported,
  passkeySupportedTitle,
  passkeySupportedBtnText,
  passkeySupportedSubTitle,
  handleOnClick,
}: Props) => {
  return (
    <div
      className={`${ReturnProperty({
        condition: reverse,
        trueValue: "flex-row-reverse",
        falseValue: "flex-row",
      })} flex items-center justify-between gap-5 w-full p-5`}
    >
      <div className='transform cursor-grab transition-transform duration-300 hover:scale-110'>
        <img className='w-full object-cover' src={src} alt='Passkey App' />
      </div>

      <div
        className={`${ReturnProperty({
          condition: reverse,
          trueValue: "justify-start",
          falseValue: "justify-end",
        })} flex flex-col items-center gap-5 my-auto`}
      >
        <div className='w-full mx-auto px-3 text-wrap text-left'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-3 text-xs font-medium'>{subtitle}</p>
        </div>
        <div className='w-full mx-auto px-3 text-wrap text-left'>
          <h1 className='text-lg font-semibold'>{passkeySupportedTitle}</h1>
          <p className='mt-3 text-xs font-medium'>{passkeySupportedSubTitle}</p>
          {isPasskeySupported && (
            <button
              onClick={handleOnClick}
              className='bg-green-600 hover:bg-green-700 py-1 px-3 mt-3 shadow shadow-gray-600 rounded-full mx-auto'
            >
              <span className='text-gray-50 text-sm font-medium'>{passkeySupportedBtnText}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
