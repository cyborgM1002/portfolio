import React from "react";
import { FcOk } from "react-icons/fc";
import { ReactAppData } from "../../../bugg-react-apps";

type Props = {
  handleCloseCreatePasskeyModal: () => void;
  createPasskey: () => Promise<void>;
};

const CreatePasskeyModal = ({ handleCloseCreatePasskeyModal, createPasskey }: Props) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='bg-white rounded-lg shadow dark:border md:mt-0 w-authCard sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'
    >
      <div className='p-8 space-y-4 md:space-y-6 sm:p-8'>
        <div className='w-full flex flex-col justify-center items-center gap-5 p-5'>
          <FcOk className='text-7xl' />

          <h1 className='text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white'>
            {ReactAppData["react-app.welcome-text"]}
          </h1>
          <h1 className='text-sm font-light leading-tight text-center tracking-tight text-gray-700 dark:text-white'>
            {ReactAppData["passkey-app.create-passkey-success-content"]}
          </h1>
        </div>
        <div className='w-full flex justify-center items-center gap-5'>
          <button
            onClick={handleCloseCreatePasskeyModal}
            className='w-1/2 mx-auto text-brand border border-brand font-light rounded-full text-sm px-3 py-2 text-center'
          >
            {ReactAppData["passkey-app.create-passkey-cta-later"]}
          </button>
          <button
            onClick={createPasskey}
            className='w-1/2 mx-auto text-white bg-brand font-light rounded-full text-sm px-3 py-2 text-center'
          >
            {ReactAppData["passkey-app.create-passkey-cta"]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePasskeyModal;
