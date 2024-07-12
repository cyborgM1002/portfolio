import { useCallback, useState } from "react";
import React from "react";
import t from "../../../../../translations/main-app/main-app.json";
import axios from "axios";
import { ADMIN_API_URL } from "../../env";
import { NotifyError, NotifySuccess } from "../notify/Notify";
function SignInModal({ closeAdminLoginModal }: { closeAdminLoginModal: () => void }) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [adminSecret, setAdminSecret] = useState<string>("");

  const handleSignIn = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        if ([username, adminSecret, password].some((value) => value?.trim() === "")) {
          NotifyError("All fields are required!!");
          return;
        }

        const payload = { username, adminSecret, email: username, password };
        const response = await axios.post(`${ADMIN_API_URL}/login`, payload, {
          headers: { "Content-Type": "application/json" },
        });

        const { data, message, status } = response.data;
        if (!status) {
          NotifyError(message);
          return;
        }
        console.log("response", response);
        console.log("data", data);

        NotifySuccess(message);
        resetForm();
        return;
      } catch (error) {
        NotifyError(error?.response?.data?.message);
      }
    },
    [username, password, adminSecret],
  );

  const resetForm = useCallback(() => {
    setUsername("");
    setPassword("");
    setAdminSecret("");
    closeAdminLoginModal();
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='bg-white rounded-lg shadow dark:border md:mt-0 w-authCard sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'
    >
      <div className='p-8 space-y-4 md:space-y-6 sm:p-8'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
          {t["admin-login"]}
        </h1>
        <form className='space-y-4 md:space-y-6' onSubmit={handleSignIn}>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {t["auth-username-label"]}
            </label>
            <input
              type='text'
              name='username'
              value={username}
              placeholder={t["auth-username-placeholder"]}
              onChange={(e) => setUsername(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              required={true}
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {t["auth-password-label"]}
            </label>
            <input
              type='password'
              name='password'
              value={password}
              placeholder={t["auth-admin-password-placeholder"]}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {t["auth-admin-secret-label"]}
            </label>
            <input
              type='password'
              name='adminSecret'
              value={adminSecret}
              placeholder={t["auth-sign-in-admin-secret-placeholder"]}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              required={true}
              onChange={(e) => setAdminSecret(e.target.value)}
            />
          </div>
          <div className='w-full flex justify-center items-center pt-5'>
            <button
              type='submit'
              className='w-1/2 mx-auto text-white bg-brand font-medium rounded-full text-sm px-5 py-2.5 text-center'
            >
              {t["auth-sign-up-submit"]}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInModal;
