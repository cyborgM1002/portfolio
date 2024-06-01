import { useCallback, useEffect, useState } from "react";
import { IntroType } from "../types/types";
import axios from "axios";
import { Notify } from "../pages";
import { ADMIN_API_URL } from "../env";

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
      Notify({ type: "loading", message: "loading..." });
      const response = await axios.get(`${ADMIN_API_URL}/summary`);
      const { data, message, status } = response.data;

      if (!status) {
        Notify({ type: "error", message });
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
      Notify({ type: "error", message: error?.message?.slice(0, 30) || "Request not completed" });
    }
  }, []);

  useEffect(() => {
    userSummary();
  }, []);

  return { intro, loading };
};

export default useUserSummary;
