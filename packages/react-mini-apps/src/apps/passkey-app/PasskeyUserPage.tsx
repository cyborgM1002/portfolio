import React, { useEffect } from "react";
import { FcBusinessman } from "react-icons/fc";
import StoredPublicKeyCredentialType from "../../types/types";
import { ReturnProperty } from "../../bugg-react-apps";
import usePasskeys from "../../hooks/use-passkey/usePasskeys";

interface Props {
  title: string;
  username: string;
  subtitle: string;
  reverse?: boolean;
  passkeyTitle: string;
  isUserLoggedIn: boolean;
  buttonLabel: string;
  storedPublicKeyCredential: StoredPublicKeyCredentialType;
  handleOnClick: () => void;
}

const PasskeyUserPage = ({
  title,
  subtitle,
  username,
  passkeyTitle,
  reverse = true,
  isUserLoggedIn,
  buttonLabel,
  storedPublicKeyCredential,
  handleOnClick,
}: Props) => {
  const { isPasskeySupported } = usePasskeys();
  useEffect(() => {}, [isPasskeySupported]);
  return (
    <div
      className={`${ReturnProperty({
        condition: reverse,
        trueValue: "flex-row-reverse",
        falseValue: "flex-row",
      })} flex items-center justify-between gap-10 w-full p-5`}
    >
      <div className='w-full flex items-center justify-center'>
        <div className='w-3/5 flex flex-col items-center justify-center border rounded-md border-brand transform cursor-grab transition-transform duration-300 hover:scale-110'>
          <span className='text-7xl'>
            <FcBusinessman />
          </span>
          <h1 className='text-lg'> {username}</h1>
        </div>
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
          <div className='w-full'>
            <h1 className='text-lg font-semibold'>{passkeyTitle}</h1>
            <h1 className='mt-3 text-xs font-medium'>{storedPublicKeyCredential?.username}</h1>
          </div>
          {isUserLoggedIn && (
            <button
              onClick={handleOnClick}
              className='bg-green-600 hover:bg-green-700 py-1 px-3 mt-3 shadow shadow-gray-600 rounded-full mx-auto'
            >
              <span className='text-gray-50 text-sm font-medium'>{buttonLabel}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasskeyUserPage;
