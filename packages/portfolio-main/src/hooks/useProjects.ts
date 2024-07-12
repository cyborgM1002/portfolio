import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { ADMIN_API_URL } from "../env";
import { GitHubRepos } from "../types/types";
import { NotifyError, NotifySuccess } from "../components/notify/Notify";

interface ReactProjectsType {
  name: string;
  link: string;
  description: string;
}

const useGithubProjects = () => {
  const [githubProjects, setGithubProjects] = useState<GitHubRepos[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const adminProjects = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await axios.get(`${ADMIN_API_URL}/githubProjects`);
      const { data, message, status } = response.data;

      if (!status) {
        NotifyError(message);
        setLoading(false);
        return;
      }

      setGithubProjects(data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      NotifyError(error?.message?.slice(0, 30));
    }
  }, []);

  useEffect(() => {
    adminProjects();
  }, []);

  return { githubProjects, loading };
};

const useReactProjects = () => {
  const [githubProjects, setGithubProjects] = useState<ReactProjectsType>();
  const [loading, setLoading] = useState<boolean>(true);

  const adminProjects = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await axios.get(`${ADMIN_API_URL}/projects`);
      const { data, message, status } = response.data;

      if (!status) {
        NotifyError(message);
        setLoading(true);
        return;
      }

      setGithubProjects({
        link: data.link,
        description: data.description,
        name: data.name,
      });
      setLoading(false);
    } catch (error) {
      setLoading(true);
      NotifyError(error?.message?.slice(0, 30));
    }
  }, []);

  useEffect(() => {
    adminProjects();
  }, []);

  return { githubProjects, loading };
};

export { useGithubProjects, useReactProjects };
