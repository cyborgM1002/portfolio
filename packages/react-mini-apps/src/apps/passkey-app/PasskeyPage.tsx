import { useEffect, useState } from "react";
import CreatePasskeyModal from "./create-passkey-modal/CreatePasskeyModal";
import usePasskeyUtility from "../../hooks/use-passkey/usePasskeys";
import React from "react";

function PasskeyPage() {
  const [value, setValue] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const { isPasskeySupported, logInThroughPasskey } = usePasskeyUtility(username);
  console.log(isPasskeySupported);

  useEffect(() => {
    if (!isPasskeySupported) logInThroughPasskey();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      setUsername(value);
      setValue("");
    } else {
      alert("Please enter a username");
    }
  };
  return (
    <div className='w-full h-screen bg-gray-600 m-0 p-0 flex flex-col gap-10 justify-center items-center'>
      {username?.length === 0 ? (
        <form className='flex flex-col gap-10 justify-center items-center' onSubmit={handleSubmit}>
          <label className='text-center text-2xl font-bold text-gray-700 dark:text-gray-100'>
            Username
          </label>
          <input
            className='w-80 h-10 p-3 focus:outline-none rounded'
            type='text'
            name='username'
            value={value}
            autoComplete='username webauthn'
            placeholder='enter username'
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            className='w-20 h-10 bg-green-600 rounded-md cursor-pointer hover:bg-green-700 text-gray-100 text-lg'
            type='submit'
            value={"log in"}
          />
        </form>
      ) : (
        <div className='flex flex-col gap-3 justify-center items-center'>
          <CreatePasskeyModal username={username} />
        </div>
      )}
    </div>
  );
}

export default PasskeyPage;
