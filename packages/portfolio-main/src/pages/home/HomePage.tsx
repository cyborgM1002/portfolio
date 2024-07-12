import React, { useState } from "react";
import { ReturnProperty, Wallpaper1, ImageCard } from "../index";
import useUserSummary from "../../hooks/useUserSummary";
import { BuggDialog } from "../../components";
import SignInModal from "../../components/sign-in-modal/SignInModal";

const HomePage = () => {
  const [openAdminLoginModal, setOpenAdminLoginModal] = useState<boolean>(false);
  const { intro, loading } = useUserSummary();

  const openAdminLogin = () => {
    setOpenAdminLoginModal(true);
  };
  const closeAdminLoginModal = () => {
    setOpenAdminLoginModal(false);
  };
  return (
    <div className='w-full h-screen flex justify-center items-center gap-3 relative'>
      <div className='w-full h-screen px-5 z-0 flex justify-center items-center gap-5'>
        <div
          className={`
            ${ReturnProperty({
              condition: loading,
              trueValue: "w-full",
              falseValue: "w-2/5",
            })} duration-500 flex flex-col justify-center items-center gap-10`}
        >
          <img
            onDoubleClick={openAdminLogin}
            className={`flex justify-center duration-500 items-center border-[10px] border-[rgb(1,134,115,0.6)] rounded-full ${ReturnProperty(
              {
                condition: loading,
                trueValue: "w-1/4 h-1/4",
                falseValue: "w-3/5 h-3/5",
              },
            )} `}
            src={Wallpaper1}
            alt='Yoga Image'
          />
          <div className='text-3xl subpixel-antialiased text-gray-700'>
            {ReturnProperty({
              condition: loading,
              trueValue: "Connecting...",
              falseValue: "Connected to DB...",
            })}
          </div>
        </div>
        <div
          className={`${ReturnProperty({
            condition: loading,
            trueValue: "hidden",
            falseValue: "w-3/5 h-screen",
          })} duration-500 p-10 flex items-center justify-center flex-col gap-5 relative`}
        >
          <ImageCard bio={intro?.bio} name={intro?.name} summary={intro?.summary} />
        </div>
      </div>
      <BuggDialog condition={openAdminLoginModal} onClose={closeAdminLoginModal}>
        <SignInModal closeAdminLoginModal={closeAdminLoginModal} />
      </BuggDialog>
    </div>
  );
};

export default HomePage;
