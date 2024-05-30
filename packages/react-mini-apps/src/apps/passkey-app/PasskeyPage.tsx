import React, { useEffect, useState } from "react";
import PasskeySignUpModal from "./modals/PasskeySignUpModal";
import CreatePasskeyModal from "./modals/CreatePasskeyModal";
import PasskeySignInModal from "./modals/PasskeySignInModal";
import PasskeyImgPage from "./PasskeyImgPage";
import PasskeyUserPage from "./PasskeyUserPage";
import usePasskeys from "@hooks/use-passkey/usePasskeys";
import { BuggDialog, FCBuggDialog, ReactApiDelays, ReactAppData } from "bugg-react-apps";
import { ReturnEvent, ReturnFC, ReturnProperty } from "../../../../../utils/utils";
import PasskeyApp from "@assets/PasskeyApp.png";
function PasskeyPage() {
  const [showAuthCard, setShowAuthCard] = useState<boolean>(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [isUserRegistered, setIsUserRegistered] = useState<boolean>(false);
  const [showCreatePasskeyModal, setShowCreatePasskeyModal] = useState<boolean>(false);
  const { isPasskeySupported, checkIfPasskeySupported, createPasskey } = usePasskeys();

  // constants
  const openPasskeyDelay = ReactApiDelays.passkey_open_create_passkey;

  // storedCredentials
  const storedUserCredentials = JSON.parse(localStorage.getItem("userCredentials"));
  const storedPublicKeyCredential = JSON.parse(localStorage.getItem("publicKeyCredential"));

  useEffect(() => {
    if (storedUserCredentials) {
      setIsUserRegistered(true);
      setIsUserLoggedIn(true);
    }
    checkIfPasskeySupported();
  }, []);

  const handleCloseAuthCard = () => {
    setShowAuthCard(false);
  };
  const handleLogout = () => {
    if (isUserLoggedIn && isUserRegistered) setIsUserLoggedIn(false);
  };

  const handleOpenAuthCard = () => {
    setShowAuthCard(true);
  };
  const handleCloseCreatePasskeyModal = () => {
    setShowCreatePasskeyModal(false);
  };

  const handleOpenCreatePasskeyModal = () => {
    let timer: NodeJS.Timeout;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setShowCreatePasskeyModal(true);
      setIsUserRegistered(true);
    }, openPasskeyDelay);
  };

  return (
    <div className='w-full bg-transparent mt-20 relative'>
      <div className='flex flex-col gap-14 justify-center items-center px-10 m-auto'>
        {ReturnFC({
          condition: isUserLoggedIn,
          trueValue: (
            <PasskeyUserPage
              reverse={false}
              username={storedUserCredentials?.username ?? ""}
              storedPublicKeyCredential={storedPublicKeyCredential}
              passkeyTitle={ReactAppData["passkey-app.passkey-title"]}
              title={ReactAppData["react-app.welcome-text"]}
              subtitle={ReactAppData["passkey-app.create-passkey-success-content"]}
              isUserLoggedIn={isUserLoggedIn}
              buttonLabel={ReturnProperty({
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
          ),
          falseValue: (
            <PasskeyImgPage
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
              passkeySignInTitle={ReactAppData["passkey-app.auth-sign-in-title"]}
              passkeySignInSubTitle={ReactAppData["passkey-app.auth-sign-in-subtitle"]}
              isPasskeySupported={isPasskeySupported}
              isUserLoggedIn={isUserLoggedIn}
              buttonLabel={ReturnProperty({
                condition: isUserRegistered && !isUserLoggedIn,
                trueValue: `${ReactAppData["passkey-app.auth-sign-in-submit"]}`,
                falseValue: `${ReactAppData["passkey-app.auth-sign-up-submit"]}`,
              })}
              handleOnClick={handleOpenAuthCard}
            />
          ),
        })}
      </div>

      <FCBuggDialog
        onClose={handleCloseAuthCard}
        condition={showAuthCard}
        FCcondition={isUserRegistered}
        FCTrue={
          <PasskeySignInModal
            setShowAuthCard={setShowAuthCard}
            setIsUserLoggedIn={setIsUserLoggedIn}
            setIsUserRegistered={setIsUserRegistered}
          />
        }
        FCFalse={
          <PasskeySignUpModal
            setShowAuthCard={setShowAuthCard}
            setIsUserLoggedIn={setIsUserLoggedIn}
            handleOpenCreatePasskeyModal={handleOpenCreatePasskeyModal}
          />
        }
      />

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
