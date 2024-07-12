import { useCallback, useEffect, useState } from "react";
import { IntroType } from "../types/types";
import axios from "axios";
import { ADMIN_API_URL } from "../env";
import { NotifyError, NotifySuccess } from "../components/notify/Notify";

interface UserSummaryType {
  status: boolean;
  data: {
    bio: string;
    name: string;
    userSummary: string;
  };
  message: string;
}

const useUserSummary = () => {
  const [intro, setIntro] = useState<IntroType>();
  const [loading, setLoading] = useState<boolean>(true);

  const userSummary = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await axios.get(`${ADMIN_API_URL}/summary`);
      const { data, message, status }: UserSummaryType = response.data;

      if (!status) {
        NotifyError(message);
        setLoading(true);
        return;
      }

      setIntro({
        bio: data.bio,
        summary: data.userSummary,
        name: data.name,
      });
      setLoading(false);
    } catch (error) {
      setLoading(true);
      NotifyError(error?.message?.slice(0, 30));
    }
  }, []);

  useEffect(() => {
    userSummary();
  }, []);

  return { intro, loading };
};

export default useUserSummary;
