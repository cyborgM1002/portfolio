import React, { useEffect, useState } from "react";
import { CommonImgCard, CommonDivCard, usePasskeys, BuggDialog } from "..";
import PasskeyApp from "../../assets/PasskeyApp.png";
import { ReactAppData, ReactApiDelays, ReturnProperty, ReturnEvent } from "../../bugg-react-apps";
import PasskeySignUpModal from "./modals/PasskeySignInModal";
import CreatePasskeyModal from "./modals/CreatePasskeyModal";
import PasskeySignInModal from "./modals/PasskeySignInModal";

function PasskeyPage() {
  const [showAuthCard, setShowAuthCard] = useState<boolean>(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [authType, setAuthType] = useState<boolean>(true);
  const [showCreatePasskeyModal, setShowCreatePasskeyModal] = useState<boolean>(false);
  const { isPasskeySupported, checkIfPasskeySupported, createPasskey } = usePasskeys();

  // constants
  const openPasskeyDelay = ReactApiDelays["passkey"]["open-create-passkey"];

  // storedCredentials
  const storedUserCredentials = JSON.parse(localStorage.getItem("userCredentials"));
  const storedPublicKeyCredential = JSON.parse(localStorage.getItem("publicKeyCredential"));

  useEffect(() => {
    if (storedUserCredentials) {
      setIsUserLoggedIn(true);
    }
    checkIfPasskeySupported();
  }, []);

  const handleCloseAuthCard = () => {
    setShowAuthCard(false);
  };
  const handleLogout = () => {
    setAuthType(true);
    setIsUserLoggedIn(false);
  };

  const handleOpenAuthCard = () => {
    setShowAuthCard(true);
  };
  const handleCloseCreatePasskeyModal = () => {
    setShowCreatePasskeyModal(false);
  };

  const handleOpenCreatePasskeyModal = () => {
    setTimeout(() => {
      setShowCreatePasskeyModal(true);
    }, openPasskeyDelay);
  };

  return (
    <div className='w-full bg-transparent mt-20 relative'>
      <div className='flex flex-col gap-14 justify-center items-center px-10 m-auto'>
        {isUserLoggedIn ? (
          <CommonDivCard
            reverse={false}
            username={storedUserCredentials?.username ?? ""}
            storedPublicKeyCredential={storedPublicKeyCredential}
            passkeyTitle={ReactAppData["passkey-app.passkey-title"]}
            title={ReactAppData["react-app.welcome-text"]}
            subtitle={ReactAppData["passkey-app.create-passkey-success-content"]}
            isUserLoggedIn={isUserLoggedIn}
            passkeySupportedBtnText={ReturnProperty({
              condition: storedPublicKeyCredential,
              trueValue: ReactAppData["react-app.global-logout"],
              falseValue: ReactAppData["passkey-app.create-passkey-cta"],
            })}
            handleOnClick={ReturnEvent({
              condition: storedPublicKeyCredential,
              trueValue: handleLogout,
              falseValue: createPasskey,
            })}
          />
        ) : (
          <CommonImgCard
            src={PasskeyApp}
            title={ReactAppData["passkey-app.landing-title"]}
            subtitle={ReactAppData["passkey-app.landing-subtitle"]}
            passkeySupportedTitle={ReturnProperty({
              condition: isPasskeySupported,
              trueValue: `${ReactAppData["passkey-app.landing-passkey-supported-title"]}`,
              falseValue: `${ReactAppData["passkey-app.landing-passkey-not-supported-title"]}`,
            })}
            passkeySupportedSubTitle={ReturnProperty({
              condition: isPasskeySupported,
              trueValue: `${ReactAppData["passkey-app.landing-passkey-supported-subtitle"]}`,
              falseValue: `${ReactAppData["passkey-app.landing-passkey-not-supported-subtitle"]}`,
            })}
            isPasskeySupported={isPasskeySupported}
            isUserLoggedIn={isUserLoggedIn}
            passkeySupportedBtnText={ReturnProperty({
              condition: isUserLoggedIn,
              trueValue: `${ReactAppData["passkey-app.auth-sign-up-submit"]}`,
              falseValue: `${ReactAppData["passkey-app.auth-sign-in-submit"]}`,
            })}
            handleOnClick={handleOpenAuthCard}
          />
        )}
      </div>

      <BuggDialog onClose={handleCloseAuthCard} condition={showAuthCard}>
        {authType ? (
          <PasskeySignUpModal
            setShowAuthCard={setShowAuthCard}
            setIsUserLoggedIn={setIsUserLoggedIn}
            handleOpenCreatePasskeyModal={handleOpenCreatePasskeyModal}
          />
        ) : (
          <PasskeySignInModal
            setShowAuthCard={setShowAuthCard}
            setIsUserLoggedIn={setIsUserLoggedIn}
          />
        )}
      </BuggDialog>

      <BuggDialog onClose={handleCloseCreatePasskeyModal} condition={showCreatePasskeyModal}>
        <CreatePasskeyModal
          createPasskey={createPasskey}
          handleCloseCreatePasskeyModal={handleCloseCreatePasskeyModal}
        />
      </BuggDialog>
    </div>
  );
}

export default PasskeyPage;
