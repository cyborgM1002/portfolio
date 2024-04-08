import React, { useEffect, useState } from "react";
import { BasicCard, ErrorModal, Notify, usePasskeys } from "..";
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

  useEffect(() => {
    checkIfPasskeySupported();
  }, [isPasskeySupported]);
  const handleOpenAuthCard = () => {
    setShowAuthCard(true);
  };

  return (
    <div className='w-full mt-20 relative'>
      <div className='flex flex-col gap-14 justify-center items-center px-10 m-auto'>
        <BasicCard
          src={PasskeyApp}
          title={ReactAppData["passkey-app"]["landing"]["title"]}
          subtitle={ReactAppData["passkey-app"]["landing"]["subtitle"]}
          passkeySupportedTitle={`${ReturnProperty({
            condition: isPasskeySupported,
            trueValue: `${ReactAppData["passkey-app"]["landing"]["passkey-supported-title"]}`,
            falseValue: `${ReactAppData["passkey-app"]["landing"]["passkey-not-supported-title"]}`,
          })}`}
          passkeySupportedSubTitle={`${ReturnProperty({
            condition: isPasskeySupported,
            trueValue: `${ReactAppData["passkey-app"]["landing"]["passkey-supported-subtitle"]}`,
            falseValue: `${ReactAppData["passkey-app"]["landing"]["passkey-not-supported-subtitle"]}`,
          })}`}
          isPasskeySupported={isPasskeySupported}
          passkeySupportedBtnText={`${ReactAppData["passkey-app"]["landing"]["sign-up-btn"]}`}
          handleOnClick={handleOpenAuthCard}
        />
      </div>
      <div
        onClick={handleCloseAuthCard}
        className={`${ReturnProperty({
          condition: showAuthCard,
          trueValue: "h-screen",
          falseValue: "h-0",
        })} w-full -top-20 absolute duration-500 bg-black/40 overflow-hidden flex items-center justify-center`}
      >
        {isPasskeySupported ? (
          <PasskeyAuthCard setShowAuthCard={setShowAuthCard} authType='signUp' />
        ) : (
          <ErrorModal />
        )}
      </div>
    </div>
  );
}

export default PasskeyPage;
