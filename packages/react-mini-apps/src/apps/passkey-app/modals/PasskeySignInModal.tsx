import { useCallback, useState } from "react";
import React from "react";
import { Notify, usePasskeys } from "../../index";
import { ReactApiDelays, ReactAppData } from "../../../bugg-react-apps";

type PasskeyAuthCardType = {
  setShowAuthCard: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

function PasskeySignInModal({ setShowAuthCard, setIsUserLoggedIn }: PasskeyAuthCardType) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { isPasskeySupported, logInThroughPasskey, checkIfPasskeySupported } = usePasskeys();

  const handleLoginThroughPasskey = async () => {
    await checkIfPasskeySupported();
    if (!isPasskeySupported) {
      await logInThroughPasskey();
    }
  };
  // constants
  const signUpDelay = ReactApiDelays["passkey"]["sign-up"];

  const handleSignIn = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      try {
        Notify({ type: "loading", message: "Logging...!!" });
        e.preventDefault();
        if (!username) return Notify({ type: "error", message: "Username can't be empty!" });
        if (!password) return Notify({ type: "error", message: "Password can't be empty!" });

        const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
        if (!userCredentials) {
          Notify({ type: "error", message: "User credential not found" });
          return;
        }
        if (userCredentials.username !== username || userCredentials.password !== password) {
          Notify({ type: "error", message: "Incorrect username or password" });
          return;
        }
        setTimeout(() => {
          Notify({ type: "success", message: "Logged in successfully" });
          resetForm();
          setShowAuthCard(false);
          setIsUserLoggedIn(true);
        }, signUpDelay);
      } catch (error) {
        Notify({
          type: "error",
          message: error?.message?.slice(0, 30) || "Error checking credential",
        });
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
              name='username webauthn'
              value={username}
              placeholder={ReactAppData["passkey-app.auth-username-placeholder"]}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={handleLoginThroughPasskey}
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
