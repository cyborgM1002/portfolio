import { useEffect, useState } from "react";
import getGitHubRepos from "../../api/getGitHubRepos";
import ProjectItems from "./project-items/ProjectItems";

export type GitHubRepos = {
  name: string;
  description: string;
  githubUrl: string;
  language: string;
  created_at: string;
  updated_at: string;
  svn_url?: string;
  html_url?: string;
};

const ProjectsPage = () => {
  const [gitHubRepos, setGitHubRepos] = useState<GitHubRepos[]>([]);
  useEffect(() => {
    getAllGitHubRepos();
  }, []);

  async function getAllGitHubRepos() {
    try {
      const res = await getGitHubRepos();
      const { data, status } = res;
      if (status == 200) {
        const newRepos: GitHubRepos[] = [];
        data?.map(
          ({
            name,
            svn_url,
            html_url,
            language,
            created_at,
            updated_at,
            description,
          }: GitHubRepos) => {
            const newData = {
              name,
              githubUrl: html_url ?? svn_url ?? "",
              language,
              created_at,
              updated_at,
              description,
            };
            newRepos.push(newData);
          }
        );
        setGitHubRepos(newRepos);
      } else {
        console.error("error");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-4/5 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-20">
      {gitHubRepos?.map(
        (
          {
            name,
            githubUrl,
            language,
            created_at,
            updated_at,
            description,
          }: GitHubRepos,
          index: number
        ) => {
          return (
            <div key={index}>
              <ProjectItems
                name={name}
                description={description}
                githubUrl={githubUrl}
                language={language}
                created_at={created_at}
                updated_at={updated_at}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default ProjectsPage;
