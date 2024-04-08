/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { UserCredentialType } from "../../types/types";
import { Notify } from "../../apps";

const usePasskeys = ({
  showAuthCard,
  userCredentials,
  setIsUserLoggedIn,
}: {
  showAuthCard?: boolean;
  userCredentials?: UserCredentialType;
  setIsUserLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isPasskeySupported, setIsPasskeySupported] = useState<boolean>(false);

  const publicKeyCredentialCreationOptions = {
    rp: {
      name: "localhost",
      id: "localhost",
    },
    user: {
      name: userCredentials?.username,
      id: new Uint8Array([1, 2, 3, 4]),
      displayName: userCredentials?.username,
    },
    challenge: new Uint8Array([21, 31, 105]),
    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7,
      },
      {
        type: "public-key",
        alg: -257,
      },
    ] as PublicKeyCredentialParameters[],
    authenticatorSelection: {
      requireResidentKey: true,
      userVerification: "preferred" as UserVerificationRequirement,
      residentKey: "required" as ResidentKeyRequirement,
      authenticatorAttachment: "platform" as AuthenticatorAttachment,
    },
    attestation: "none" as AttestationConveyancePreference,
  };

  const checkIfPasskeySupported = useCallback(async () => {
    try {
      if (
        window.PublicKeyCredential &&
        (PublicKeyCredential as any).isUserVerifyingPlatformAuthenticatorAvailable &&
        (PublicKeyCredential as any).isConditionalMediationAvailable
      ) {
        const response = await Promise.all([
          (PublicKeyCredential as any)?.isUserVerifyingPlatformAuthenticatorAvailable(),
          (PublicKeyCredential as any)?.isConditionalMediationAvailable(),
        ]);
        if (response.every((r) => r === true)) {
          setIsPasskeySupported(true);
        } else {
          setIsPasskeySupported(false);
        }
      }
    } catch (error) {
      Notify({
        type: "error",
        message: error?.message || "Error verifying platform authenticator",
      });
    }
  }, [showAuthCard]);

  const createPasskey = useCallback(async () => {
    try {
      const credential = await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions,
      });

      const { rawId, response } = (credential as any).rawId;

      const storedCredential = {
        id: credential?.id,
        type: credential?.type,
        rawId: Array.from(new Uint8Array(rawId)),
        response: {
          clientDataJSON: Array.from(new Uint8Array(response?.clientDataJSON)),
          attestationObject: Array.from(new Uint8Array(response?.attestationObject)),
        },
      };

      localStorage.setItem("publicKeyCredential", JSON.stringify(storedCredential));
    } catch (error) {
      Notify({ type: "error", message: error?.message || "Error creating passkey" });
    }
  }, []);

  const logInThroughPasskey = useCallback(async () => {
    try {
      const abortController = new AbortController();
      const storedCredential = localStorage.getItem("publicKeyCredential");
      const publicKeyCredentialRequestOptions = JSON.parse(storedCredential as string);

      const challenge = new Uint8Array([21, 31, 105]);
      publicKeyCredentialRequestOptions.challenge = challenge;

      if (!publicKeyCredentialRequestOptions) {
        Notify({ type: "error", message: "No passkey found" });
      } else {
        const credential = await navigator.credentials.get({
          publicKey: publicKeyCredentialRequestOptions,
          signal: abortController.signal,
          mediation: "conditional" as CredentialMediationRequirement,
        });
        if (credential?.id === publicKeyCredentialRequestOptions?.id) {
          setIsUserLoggedIn(true);
        } else {
          setIsUserLoggedIn(false);
        }
      }
    } catch (error) {
      Notify({ type: "error", message: "Error checking credential" });
    }
  }, []);

  return {
    isPasskeySupported,
    createPasskey,
    logInThroughPasskey,
    checkIfPasskeySupported,
  };
};

export default usePasskeys;
