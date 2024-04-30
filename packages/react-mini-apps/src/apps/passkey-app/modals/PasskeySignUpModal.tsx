import { useCallback, useState } from "react";
import React from "react";
import { Notify } from "../../index";
import { ReactApiDelays, ReactAppData, ReturnProperty } from "../../../bugg-react-apps";

type PasskeyAuthCardType = {
  setShowAuthCard: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenCreatePasskeyModal: () => void;
};

function PasskeySignUpModal({
  setShowAuthCard,
  setIsUserLoggedIn,
  handleOpenCreatePasskeyModal,
}: PasskeyAuthCardType) {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // constants
  const signUpDelay = ReactApiDelays["passkey"]["sign-up"];

  const handleSignUp = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      try {
        Notify({ type: "loading", message: "Creating profile!!" });
        e.preventDefault();
        if (!email) return Notify({ type: "error", message: "Email can't be empty!" });
        if (!username) return Notify({ type: "error", message: "Username can't be empty!" });
        if (!password) return Notify({ type: "error", message: "Password can't be empty!" });

        localStorage.setItem(
          "userCredentials",
          JSON.stringify({
            email: email,
            username: username,
            password: password,
          }),
        );
        setTimeout(() => {
          Notify({ type: "success", message: "Profile created successfully" });
          resetForm();
          setShowAuthCard(false);
          handleOpenCreatePasskeyModal();
          setIsUserLoggedIn(true);
        }, signUpDelay);
      } catch (error) {
        Notify({
          type: "error",
          message: error?.message?.slice(0, 30) || "Error checking credential",
        });
      }
    },
    [email, username, password],
  );

  const resetForm = useCallback(() => {
    setEmail("");
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
          {ReactAppData["passkey-app.auth-sign-up-title"]}
        </h1>
        <form className='space-y-4 md:space-y-6' onSubmit={handleSignUp}>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {ReactAppData["passkey-app.auth-email-label"]}
            </label>
            <input
              type='email'
              name='email'
              autoComplete='email'
              value={email}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              placeholder={ReactAppData["passkey-app.auth-email-placeholder"]}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {ReactAppData["passkey-app.auth-username-label"]}
            </label>
            <input
              type='text'
              name='username'
              value={username}
              placeholder={ReactAppData["passkey-app.auth-username-placeholder"]}
              onChange={(e) => setUsername(e.target.value)}
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
              placeholder={ReactAppData["passkey-app.auth-sign-up-password-placeholder"]}
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
              {ReactAppData["passkey-app.auth-sign-up-submit"]}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasskeySignUpModal;
