import React, { useEffect, useState } from "react";
import { BasicCard, ErrorModal, usePasskeys } from "..";
import PasskeyApp from "../../assets/PasskeyApp.png";
import { ReactAppData } from "../../bugg-react-apps";
import PasskeyAuthCard from "./passkey-auth-card/PasskeyAuthCard";
import { ReturnProperty } from "../../utils/utils";

function PasskeyPage() {
  const [showAuthCard, setShowAuthCard] = useState<boolean>(false);
  const { isPasskeySupported, checkIfPasskeySupported } = usePasskeys({ showAuthCard });

  const handleCloseAuthCard = () => {
    setShowAuthCard(false);
  };
  const handleOpenAuthCard = () => {
    checkIfPasskeySupported();
    setShowAuthCard(true);
  };

  return (
    <div className='w-full my-10 relative'>
      <div className='flex flex-col gap-14 justify-center items-center px-10 m-auto'>
        <BasicCard
          src={PasskeyApp}
          title={ReactAppData["passkey-app"]["landing"]["title"]}
          subtitle={ReactAppData["passkey-app"]["landing"]["subtitle"]}
          btnTitle={ReactAppData["passkey-app"]["landing"]["check-if-passkey-supported"]}
          btnText={ReactAppData["passkey-app"]["landing"]["continue-btn"]}
          handleOnClick={handleOpenAuthCard}
        />
      </div>
      <div
        onClick={handleCloseAuthCard}
        className={`${ReturnProperty({
          condition: showAuthCard,
          trueValue: "h-screen",
          falseValue: "h-0",
        })} w-full -top-10 absolute duration-500 bg-black/40 overflow-hidden flex items-center justify-center`}
      >
        {isPasskeySupported ? <PasskeyAuthCard authType='signUp' /> : <ErrorModal />}
      </div>
    </div>
  );
}

export default PasskeyPage;
