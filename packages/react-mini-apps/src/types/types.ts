export type UserCredentialType = {
  email: string;
  username: string;
  password: string;
};

export type PasskeyAuthCardType = {
  authType: "signUp" | "signIn";
  setShowAuthCard: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenCreatePasskeyModal: () => void;
};

export default interface StoredPublicKeyCredentialType {
  username: string;
  id: string;
  type: string;
  rawId: Array<number>;
  response: {
    clientDataJSON: Array<number>;
    attestationObject: Array<number>;
  };
}
