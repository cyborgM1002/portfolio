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
