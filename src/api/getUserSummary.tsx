/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { GITHUB_URL, USER_SUMMARY } from "../env";
import { Notify } from "../utils/utils";

export type IntroType = {
  bio: string | undefined;
  summary: string | undefined;
  name: string | undefined;
};

export default async function useUserSummary() {
  const [intro, setIntro] = useState<IntroType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserSummary();
  }, []);

  async function getUserSummary() {
    try {
      setLoading(true);
      const data = await fetch(GITHUB_URL);
      const response = await data.json();
      console.log(response);

      if (response?.status === 200) {
        setTimeout(() => {
          setIntro({
            bio: response?.bio,
            summary: USER_SUMMARY,
            name: response.name,
          });
          setLoading(false);
          Notify({ type: "success", message: "Summary fetched" });
        }, 1500);
      } else {
        Notify({ type: "error", message: "Summary not found!" });
        setLoading(true);
      }
    } catch (error: any) {
      setLoading(true);
      Notify({ type: "error", message: error?.message });
    } finally {
      Notify({ type: "loading", message: "loading..." });
    }
  }

  return {
    intro,
    loading,
    setLoading,
  };
}
