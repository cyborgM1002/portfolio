import { useCallback, useState } from "react";
import React from "react";
import { usePasskeys } from "../../index";
import { ReactApiDelays, ReactAppData } from "../../../bugg-react-apps";
import { webAuthnAbortService } from "../helpers/webAuthn";
import {
  NotifyError,
  NotifySuccess,
} from "../../../../../portfolio-main/src/components/notify/Notify";

type PasskeySignInModalType = {
  setShowAuthCard: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUserRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};

function PasskeySignInModal({
  setShowAuthCard,
  setIsUserLoggedIn,
  setIsUserRegistered,
}: PasskeySignInModalType) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { logInThroughPasskey } = usePasskeys();

  const handleLoginThroughPasskey = async () => {
    webAuthnAbortService.cancelCeremony();

    const response = await logInThroughPasskey();
    if (!response) {
      return;
    }
    NotifySuccess("Logged in successfully");
    setIsUserLoggedIn(true);
  };
  // constants
  const signUpDelay = ReactApiDelays["passkey"]["sign-up"];

  const handleSignIn = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        if (!username) return NotifyError("Username can't be empty!");
        if (!password) return NotifyError("Password can't be empty!");

        const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
        if (!userCredentials) {
          NotifyError("User credential not found");
          return;
        }
        if (userCredentials.username !== username || userCredentials.password !== password) {
          NotifyError("Incorrect username or password");
          return;
        }
        setTimeout(() => {
          NotifySuccess("Logged in successfully");
          resetForm();
          setShowAuthCard(false);
          setIsUserLoggedIn(true);
          setIsUserRegistered(true);
        }, signUpDelay);
      } catch (error) {
        NotifyError(error?.message?.slice(0, 30));
      }
    },
    [username, password],
  );

  const resetForm = useCallback(() => {
    setUsername("");
    setPassword("");
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='bg-white rounded-lg shadow dark:border md:mt-0 w-authCard sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'
    >
      <div className='p-8 space-y-4 md:space-y-6 sm:p-8'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          {ReactAppData["passkey-app.auth-sign-in-title"]}
        </h1>
        <form className='space-y-4 md:space-y-6' onSubmit={handleSignIn}>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {ReactAppData["passkey-app.auth-username-label"]}
            </label>
            <input
              type='text'
              name='username'
              autoComplete='username webauthn'
              value={username}
              placeholder={ReactAppData["passkey-app.auth-username-placeholder"]}
              onChange={(e) => setUsername(e.target.value)}
              onClick={handleLoginThroughPasskey}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              required={true}
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {ReactAppData["passkey-app.auth-password-label"]}
            </label>
            <input
              type='password'
              name='password'
              value={password}
              placeholder={ReactAppData["passkey-app.auth-sign-in-password-placeholder"]}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='w-full flex justify-center items-center pt-5'>
            <button
              type='submit'
              className='w-1/2 mx-auto text-white bg-brand font-medium rounded-full text-sm px-5 py-2.5 text-center'
            >
              {ReactAppData["passkey-app.auth-sign-in-submit"]}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasskeySignInModal;
