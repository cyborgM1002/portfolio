import { useEffect, useState } from "react";

const usePasskeys = (username: string) => {
  const [isPasskeySupported, setIsPasskeySupported] = useState(false);

  const publicKeyCredentialCreationOptions = {
    rp: {
      name: "localhost",
      id: "localhost",
    },
    user: {
      name: username,
      id: new Uint8Array([1, 2, 3, 4]),
      displayName: username,
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

  useEffect(() => {
    try {
      if (
        window.PublicKeyCredential &&
        (PublicKeyCredential as any).isUserVerifyingPlatformAuthenticatorAvailable &&
        (PublicKeyCredential as any).isConditionalMediationAvailable
      ) {
        Promise.all([
          (PublicKeyCredential as any)?.isUserVerifyingPlatformAuthenticatorAvailable(),
          (PublicKeyCredential as any)?.isConditionalMediationAvailable(),
        ]).then((results) => {
          if (results.every((r) => r === true)) {
            setIsPasskeySupported(true);
          } else {
            setIsPasskeySupported(false);
          }
        });
      }
    } catch (error) {
      console.error("Error verifying platform authenticator:", error);
    }
  }, [username]);

  const createPasskey = async () => {
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
      console.error("Error creating credential:", error);
    }
  };

  const logInThroughPasskey = async () => {
    try {
      const abortController = new AbortController();
      const storedCredential = localStorage.getItem("publicKeyCredential");
      const publicKeyCredentialRequestOptions = JSON.parse(storedCredential as string);
      const challenge = new Uint8Array([21, 31, 105]);
      publicKeyCredentialRequestOptions.challenge = challenge;

      const credential = await navigator.credentials.get({
        publicKey: publicKeyCredentialRequestOptions,
        signal: abortController.signal,
        mediation: "conditional" as CredentialMediationRequirement,
      });
      if (credential?.id === publicKeyCredentialRequestOptions?.id) {
        setIsPasskeySupported(true);
      }
    } catch (error) {
      console.error("Error checking credential:", error);
    }
  };

  return { isPasskeySupported, createPasskey, logInThroughPasskey };
};

export default usePasskeys;
