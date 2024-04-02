import { GitHubRepos } from "../../../types/types";
import React from "react";
import useGitHubRepos from "../../../hooks/useGitHubRepos";
import MegaProjectItems from "../common/mega-project-items/MegaProjectItems";

const MegaProjectsHomePage = () => {
  const { gitHubRepos } = useGitHubRepos();

  return (
    <div className='w-4/5 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-20'>
      {gitHubRepos?.map(
        ({ id, name, githubUrl, language, created_at, updated_at, description }: GitHubRepos) => (
          <div key={id}>
            <MegaProjectItems
              name={name}
              description={description}
              githubUrl={githubUrl}
              language={language}
              created_at={created_at}
              updated_at={updated_at}
            />
          </div>
        ),
      )}
    </div>
  );
};

export default MegaProjectsHomePage;
