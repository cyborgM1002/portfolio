import { useEffect, useState } from "react";
import React from "react";
import { Notify, usePasskeys } from "../../index";
import { UserCredentialType } from "../../../types/types";
import { ReactAppData } from "../../../bugg-react-apps";
import { ReturnProperty } from "../../../utils/utils";
import { Route } from "react-router-dom";
function PasskeyAuthCard({ authType }: { authType: "signUp" | "signIn" }) {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userCredentials, setUserCredentials] = useState<UserCredentialType>();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const { isPasskeySupported, logInThroughPasskey } = usePasskeys({
    userCredentials,
    setIsUserLoggedIn,
  });
  useEffect(() => {
    if (!isPasskeySupported && !isUserLoggedIn) logInThroughPasskey();
  }, [isUserLoggedIn, isPasskeySupported]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!email) return Notify({ type: "error", message: "Email can't be empty!" });
      if (!username) return Notify({ type: "error", message: "Username can't be empty!" });
      if (!password) return Notify({ type: "error", message: "Password can't be empty!" });

      setUserCredentials({
        email,
        username,
        password,
      });
      resetForm();
      localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
      setIsUserLoggedIn(true);
      Notify({ type: "success", message: "Successfully logged in" });
    } catch (error) {
      Notify({ type: "error", message: error?.message || "Error checking credential" });
    }
  };

  const resetForm = () => {
    setEmail("");
    setUsername("");
    setPassword("");
  };

  if (!authType) {
    Notify({ type: "error", message: "Something went wrong!!" });
    return;
  }

  return (
    <div className='w-full h-screen flex flex-col gap-10 justify-center items-center'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div
          onClick={(e) => e.stopPropagation()}
          className='bg-white rounded-lg shadow dark:border md:mt-0 w-authCard sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'
        >
          <div className='p-8 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              {ReturnProperty({
                condition: authType === "signIn",
                trueValue: `${ReactAppData["passkey-app"]["sign-in"]["title"]}`,
                falseValue: `${ReactAppData["passkey-app"]["sign-up"]["title"]}`,
              })}
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  {ReactAppData["passkey-app"]["auth"]["email-label"]}
                </label>
                <input
                  type='email'
                  name='email'
                  autoComplete='email webauthn'
                  value={email}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                  placeholder={ReactAppData["passkey-app"]["auth"]["email-placeholder"]}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  {ReactAppData["passkey-app"]["auth"]["username-label"]}
                </label>
                <input
                  type='text'
                  name='username'
                  value={username}
                  placeholder={ReactAppData["passkey-app"]["auth"]["username-placeholder"]}
                  onChange={(e) => setUsername(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                  required={true}
                />
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  {ReactAppData["passkey-app"]["auth"]["password-label"]}
                </label>
                <input
                  type='password'
                  name='password'
                  value={password}
                  placeholder={ReturnProperty({
                    condition: authType === "signIn",
                    trueValue: `${ReactAppData["passkey-app"]["sign-in"]["password-placeholder"]}`,
                    falseValue: `${ReactAppData["passkey-app"]["sign-up"]["password-placeholder"]}`,
                  })}
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
                  {ReturnProperty({
                    condition: authType === "signIn",
                    trueValue: `${ReactAppData["passkey-app"]["sign-in"]["submit"]}`,
                    falseValue: `${ReactAppData["passkey-app"]["sign-up"]["submit"]}`,
                  })}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasskeyAuthCard;
