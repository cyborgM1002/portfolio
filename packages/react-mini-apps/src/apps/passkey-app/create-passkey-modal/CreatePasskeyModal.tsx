import usePasskeys from "../../../hooks/use-passkey/usePasskeys";
import React from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const CreatePasskeyModal = ({ username }: any) => {
  const { isPasskeySupported, createPasskey } = usePasskeys(username);
  return (
    <div className='w-full min-h-96 p-5 shadow-md shadow-slate-400 bg-gray-200 rounded flex flex-col justify-around items-center'>
      <p className='text-left text-2xl text-gray-100 dark:text-gray-700'>{username}</p>
      <button
        onClick={createPasskey}
        hidden={!isPasskeySupported}
        className='w-60 h-10 bg-green-600 rounded-md cursor-pointer hover:bg-green-700 text-gray-100 text-lg'
      >
        Create Passkey
      </button>
    </div>
  );
};

export default CreatePasskeyModal;
