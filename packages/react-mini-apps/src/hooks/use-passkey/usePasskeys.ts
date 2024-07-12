import { useCallback, useState } from "react";
import { StoredPublicKeyCredentialType } from "../../apps";
import { webAuthnAbortService } from "../../apps/passkey-app/helpers/webAuthn";
import {
  NotifyError,
  NotifySuccess,
} from "../../../../portfolio-main/src/components/notify/Notify";

const usePasskeys = () => {
  const [isPasskeySupported, setIsPasskeySupported] = useState<boolean>(false);

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
      NotifyError(error?.message?.slice(0, 30));
      return;
    }
  }, []);

  const createPasskey = useCallback(async () => {
    webAuthnAbortService.cancelCeremony();
    try {
      const storedCredential = JSON.parse(localStorage.getItem("userCredentials"));
      if (!storedCredential) {
        NotifyError("User credential not found");
        return;
      }
      const publicKeyCredentialCreationOptions = {
        rp: {
          name: location.hostname,
          id: location.hostname,
        },
        user: {
          name: storedCredential?.email ?? "",
          id: new Uint8Array([1, 2, 3, 4]),
          displayName: storedCredential?.username ?? "",
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

      const credential = await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions,
      });

      const { id, type, rawId, response } = credential as any;

      const storedPublicKeyCredential: StoredPublicKeyCredentialType = {
        username: storedCredential?.username,
        id: id,
        type: type,
        rawId: Array.from(new Uint8Array(rawId)),
        response: {
          clientDataJSON: Array.from(new Uint8Array(response?.clientDataJSON)),
          attestationObject: Array.from(new Uint8Array(response?.attestationObject)),
        },
      };

      localStorage.setItem("publicKeyCredential", JSON.stringify(storedPublicKeyCredential));
    } catch (error) {
      NotifyError(error?.message?.slice(0, 30));
      return;
    }
  }, []);

  const logInThroughPasskey = async () => {
    webAuthnAbortService.cancelCeremony();
    try {
      const abortController = new AbortController();
      const publicKeyCredentialRequestOptions = JSON.parse(
        localStorage.getItem("publicKeyCredential"),
      );
      if (!publicKeyCredentialRequestOptions) {
        NotifyError("No passkey found");
        return;
      }
      const challenge = new Uint8Array([21, 31, 105]);
      publicKeyCredentialRequestOptions.challenge = challenge;

      const credential = await navigator.credentials.get({
        publicKey: publicKeyCredentialRequestOptions,
        signal: abortController.signal,
        mediation: "conditional" as CredentialMediationRequirement,
      });
      if (credential?.id === publicKeyCredentialRequestOptions?.id) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      NotifyError(error?.message?.slice(0, 30));
    }
  };

  return {
    isPasskeySupported,
    createPasskey,
    logInThroughPasskey,
    checkIfPasskeySupported,
  };
};

export default usePasskeys;
