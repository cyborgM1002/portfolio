/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Notify } from "../utils/utils";
import { GITHUB_URL, USER_SUMMARY } from "../components";
import { IntroType } from "../types/types";
import axios from "axios";
async function useUserSummary() {
  const [intro, setIntro] = useState<IntroType>();
  const [loading, setLoading] = useState<boolean>(true);
  console.log("intro", intro, "loading", loading);

  useEffect(() => {
    setLoading(true);
    Notify({ type: "loading", message: "loading..." });
    axios
      .get(GITHUB_URL)
      .then((response) => {
        console.log("response summary: " + response?.data);

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
      })
      .catch((error: any) => {
        setLoading(true);
        Notify({ type: "error", message: error?.message });
      });
  }, []);

  return { intro, loading };
}

export default useUserSummary;
