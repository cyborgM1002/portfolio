import { useCallback, useState } from "react";
import React from "react";
import t from "../../../../../translations/main-app/main-app.json";
import axios from "axios";
import { ADMIN_API_URL } from "../../env";
import { NotifyError, NotifySuccess } from "../notify/Notify";

function SignUpModal({ closeAdminLoginModal }: { closeAdminLoginModal: () => void }) {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [adminSecret, setAdminSecret] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState({
    message: "",
    flag: false,
  });

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setErrorMessage({ message: "Password is weak!", flag: true });
    const criteria = [
      {
        regex: /.{8,}/,
        message: "Password must be at least 8 characters long.",
      },
      {
        regex: /[A-Z]/,
        message: "Password must contain at least one uppercase letter.",
      },
      {
        regex: /[a-z]/,
        message: "Password must contain at least one lowercase letter.",
      },
      {
        regex: /[0-9]/,
        message: "Password must contain at least one digit.",
      },
      {
        regex: /[!@#$%^&*(),.?":{}|<>]/,
        message: "Password must contain at least one special character.",
      },
    ];

    for (let criterion of criteria) {
      if (!criterion.regex.test(e.target.value)) {
        setErrorMessage({
          flag: true,
          message: criterion.message,
        });
        return;
      }
    }
    setErrorMessage({
      flag: false,
      message: "Strong password!!",
    });
  };

  const handleSignUp = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        if ([username, adminSecret, email, password].some((value) => value?.trim() === "")) {
          NotifyError("All fields are required!!");
          return;
        }

        const payload = { username, adminSecret, email, password };
        const response = await axios.post(`${ADMIN_API_URL}/register`, payload, {
          headers: { "Content-Type": "application/json" },
        });

        const { message, status } = response.data;
        if (!status) {
          NotifyError(message);
          return;
        }
        NotifySuccess(message);
        resetForm();
        return;
      } catch (error) {
        NotifyError(error?.response?.data?.message);
      }
    },
    [email, username, password, adminSecret],
  );

  const resetForm = useCallback(() => {
    setEmail("");
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
          {t["auth-sign-up-title"]}
        </h1>
        <form className='space-y-4 md:space-y-6' onSubmit={handleSignUp}>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              {t["auth-email-label"]}
            </label>
            <input
              type='email'
              name='email'
              autoComplete='email'
              value={email}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              placeholder={t["auth-email-placeholder"]}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
              placeholder={t["auth-sign-up-password-placeholder"]}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              required={true}
              onChange={handleChangePassword}
            />
            {errorMessage.message ? (
              <span
                className={`${
                  errorMessage.flag ? "text-red-600" : "text-green-600"
                } text-gray-200 text-[10px]`}
              >
                {errorMessage.message}
              </span>
            ) : null}
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

export default SignUpModal;
