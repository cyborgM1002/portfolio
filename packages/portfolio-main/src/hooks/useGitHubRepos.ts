import { useCallback, useEffect, useState } from "react";
import { GitHubRepos } from "../types/types";
import axios from "axios";
import { GITHUB_API_REPO_URL } from "../env";
import { Notify } from "../pages";

const useGitHubRepos = () => {
  const [gitHubRepos, setGitHubRepos] = useState<GitHubRepos[]>([]);
  useEffect(() => {
    getAllGitHubRepos();
  }, []);
  const getAllGitHubRepos = useCallback(async () => {
    Notify({ type: "loading", message: "loading..." });
    try {
      const { data, status } = await axios.get(GITHUB_API_REPO_URL);
      if (status == 200) {
        const newRepos: GitHubRepos[] = [];
        data?.map(
          ({
            id,
            name,
            svn_url,
            html_url,
            clone_url,
            language,
            created_at,
            updated_at,
            description,
          }: GitHubRepos) => {
            const newData = {
              id,
              name,
              githubUrl: html_url ?? svn_url ?? clone_url ?? "",
              language,
              created_at,
              updated_at,
              description,
            };
            newRepos.push(newData);
          },
        );
        setGitHubRepos(newRepos);
      } else {
        Notify({ type: "error", message: "Repo not found!" });
      }
    } catch (error) {
      Notify({ type: "error", message: error?.message || "Request not completed" });
    } finally {
      Notify({ type: "success", message: "Request completed" });
    }
  }, []);

  return { gitHubRepos };
};

export default useGitHubRepos;
