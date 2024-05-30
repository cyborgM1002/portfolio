/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { IntroType } from "../types/types";
import axios from "axios";
import Notify from "@components/notify/Notify";
import { GITHUB_API_URL, USER_SUMMARY } from "env";

const useUserSummary = () => {
  const [intro, setIntro] = useState<IntroType>();
  const [loading, setLoading] = useState<boolean>(true);

  const userSummary = useCallback(async () => {
    try {
      setLoading(true);
      Notify({ type: "loading", message: "loading..." });
      const {
        status,
        data: { bio, name },
      } = await axios.get(GITHUB_API_URL);

      if (status === 200) {
        setTimeout(() => {
          setIntro({
            bio: bio,
            summary: USER_SUMMARY,
            name: name,
          });
          setLoading(false);
          Notify({ type: "success", message: "Summary fetched" });
        }, 1500);
      } else {
        Notify({ type: "error", message: "Summary not found!" });
        setLoading(true);
      }
    } catch (error) {
      setLoading(true);
      Notify({ type: "error", message: error?.message?.slice(0, 30) || "Request not completed" });
    } finally {
      Notify({ type: "success", message: "Request completed" });
    }
  }, []);

  useEffect(() => {
    userSummary();
  }, []);

  return { intro, loading };
};

export default useUserSummary;
